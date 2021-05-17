import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  // Injeta as dependencias (service, form, router e route)
  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  form: FormGroup;
  employee: Employee;

  ngOnInit() {

    this.determina_edit_ou_delete();
  }

  determina_edit_ou_delete() {

    // Inicializa o formulário
    this.form = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', Validators.required]
    })

    // Verifica se veio ID na rota
    var id = Number(this.route.snapshot.paramMap.get('id'));
    if (id != null) {

      // Busca o Funcionário
      this.get(id);
    }

  }

  get(id: number) {

    // Se inscreve no serviço e aguarda o retorno
    this.employeeService.getById(id).subscribe(result => {

      // Preenche o funcionário com o retorno
      this.employee = result;

      // Preenche o form
      this.form.setValue({
        id: this.employee.id,
        nome: this.employee.firstName,
        sobrenome: this.employee.lastName,
        email: this.employee.emailId
      })
    })
  }

  create() {

    // Remove a propriedade ID do form
    delete this.form.value['id'];

    // Obtém os valores do formulário na interface
    this.employee = this.form.value;

    // Se inscreve no serviço e aguarda o retorno
    this.employeeService.post(this.employee).subscribe(result => {

      // Redireciona para o componente de funcionários
      this.router.navigateByUrl('employees');
    })
  }

  edit() {

    // Obtém os valores do formulário na interface
    this.employee = this.form.value;

    // Se inscreve no serviço e aguarda o retorno
    this.employeeService.put(this.employee).subscribe(result => {

      // Redireciona para o componente de produtos
      this.router.navigateByUrl('employees');
    })
  }

}
