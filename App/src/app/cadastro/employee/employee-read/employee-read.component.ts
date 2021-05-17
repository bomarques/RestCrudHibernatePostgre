import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.css']
})
export class EmployeeReadComponent implements OnInit {

  employees: Employee[];

  // Injeta o serviçe e o router no construtor
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    // Ao iniciar o componente, realiza a busca
    this.get();
  }

  get() {

    // Se inscreve no serviço e aguarda o retorno
    this.employeeService.get().subscribe(result => {

      // Preenche a lista de empregados com o retorno
      this.employees = result;
    })
  }

  create() {

    // Redireciona para o componente de cadastro
    this.router.navigateByUrl("employee/cadastro")
  }

  edit(employee: any) {

    // Redireciona para o componente de cadastra, enviando o ID do produto na rota
    this.router.navigate(["employee/cadastro", employee.id])
  }
  delete(employee: any) {

    // Solicita confirmação
    var confirm = window.confirm('Tem certeza?');

    if (confirm) {

      // Solicita ao serviço e aguarda o retorno
      this.employeeService.delete(employee.id).subscribe(result => {

        // Avisa o usuário
        if (result != null)
          alert('Funcionário excluído com sucesso!');

        // Recarrega a lista
        this.get();

      })
    }
  }

}

