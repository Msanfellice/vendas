import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb, PoBreadcrumbItem } from '@po-ui/ng-components';


import { PoPageDynamicEditActions,
         PoPageDynamicEditField,
         PoPageDynamicEditLiterals }
         from '@po-ui/ng-templates';

    import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit{
  readonly actions: PoPageDynamicEditActions = {
    cancel: '/customer',
    save: '/customer',
    saveNew: '/customer/new'

  }
  readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Clientes', link: '/customer' },
    ],
  };

  readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'id', key: true, visible: false },
    { property: 'firstName', label: 'Nome', required: true },
    { property: 'lastName', label: 'Sobrenome', required: true },

    ];

    apiService!: string;
    breadcrumbItem!: PoBreadcrumbItem;
    currentId: any;
    isUpdate = false;
    title!: string;

    constructor(
    private activatedRoute: ActivatedRoute,
    private CustomerService: CustomerService
    ) {}


    ngOnInit() {
      this.isUpdate = false;
      this.apiService = this.CustomerService.getEndpoint();

      // Carrega o registro pelo ID
      this.activatedRoute.params.subscribe((pars) => {
        this.currentId = pars['id'];

        // Se nao tiver o ID definido sera um CREATE
        if (this.currentId === undefined) {
          this.isUpdate = false;
          this.title = 'Incluir Usuário';
        } else {
          this.isUpdate = true;
          this.title = 'Editar Usuário';
        }
        this.setBreadcrumb();
      });
    }
    private setBreadcrumb(): void {
      this.breadcrumbItem = { label: this.title.split(' ')[0] };
      this.breadcrumb.items.push(this.breadcrumbItem);
    }
  }



