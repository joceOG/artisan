 export interface IBaseService {
    nom: string;
    prix:string;
    url: string;
  }
  export interface IService extends IBaseService {
    id: number;
  }
  