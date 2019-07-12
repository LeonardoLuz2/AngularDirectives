import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class ServiceBase<T>
{
    private URL = environment.URL;

    constructor(
        private http: HttpClient,
        private endpoint: string
    ) { }

    /**
     * Método para consumo de uma coleção de dados na WebAPI.
     * @return Retorna um Observable da coleção do tipo especificado.
     */
    public GetAll(): Observable<T[]> {
        return this.http.get<T[]>(`${this.URL}/${this.endpoint}`);
    }

    /**
     * Método para consumo de uma coleção de dados na WebAPI.
     * 
     * @param id Identificador(chave)
     * @return Retorna um Observable do tipo especificado.
     */
    public GetById(id: any): Observable<T> {
        return this.http.get<T>(`${this.URL}/${this.endpoint}/${id}`);
    }

    /**
     * Método para registro (post) de dados na WebAPI.
     * 
     * @param item Objeto que vai ser utilizado no body da requisição.
     * @return Retorna um Observable do tipo especificado.
     */
    public Create(item: T): Observable<T> {
        return this.http.post<T>(`${this.URL}/${this.endpoint}`, item);
    }

    /**
     * Método para atualização (put) de dados na WebAPI.
     * 
     * @param id Identificador(chave)
     * @param item Objeto que vai ser utilizado no body da requisição.
     * @return Retorna um Observable do tipo especificado.
     */
    public Update(id: any, item: T): Observable<T> {
        return this.http.put<T>(`${this.URL}/${this.endpoint}/${id}`, item);
    }

    /**
     * Método para exclusão (delete) de dados na WebAPI.
     * 
     * @param id Identificador(chave)
     * @return Retorna um Observable do tipo especificado.
     */
    public Remove(id: any): Observable<T> {
        return this.http.delete<T>(`${this.URL}/${this.endpoint}/${id}`);
    }
}