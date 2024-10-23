import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  searchQuery: string = '';  // Para armazenar a consulta do usuário
  searchResults: any[] = []; // Armazena os resultados da busca

  constructor(private http: HttpClient) {}

  // Função de busca que será chamada ao buscar por lugares
  onSearch() {
    if (this.searchQuery.trim() === '') {
      this.searchResults = []; // Limpa os resultados se a consulta estiver vazia
      return;
    }

    const apiKey = '138321452902884e15948014x17851'; // Substitua pela sua chave da API
    const url = `https://geocode.xyz/${encodeURIComponent(this.searchQuery)}?auth=${apiKey}&json=1`;

    // Fazendo a requisição HTTP para a API do Geocode.xyz
    this.http.get(url).subscribe({
      next: (response: any) => {
        console.log('Resposta da API:', response); // Logar a resposta para ver a estrutura
        if (response && response.standard) {
          this.searchResults = [{
            display_name: response.standard.city || response.standard.address,
            country: response.standard.countryname,
            neighborhood: response.standard.neighbourhood || 'Não disponível'
          }];
        } else {
          this.searchResults = [];
        }
        
      },
      error: (error) => {
        console.error('Erro ao buscar locais:', error);
        this.searchResults = []; // Limpa os resultados em caso de erro
      }
    });
  }
}
