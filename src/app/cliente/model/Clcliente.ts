export class Clcliente {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    clave: string;
    
    constructor(obj: any = {}) {
      this.id = obj.id || 0;  // Puedes establecer otro valor en lugar de 0 si es apropiado
      this.first_name = obj.first_name || '';
      this.last_name = obj.last_name || '';
      this.email = obj.email || '';
      this.clave = obj.clave || '';
    }
  }
  