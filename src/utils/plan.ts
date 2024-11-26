export default interface PlanProps{
    id:string;
    nome:string;
    bairro:string;
    local:string;
    contato: String
    numero: number
    tipo :ClanEnum
  };
  
export enum ClanEnum {
  Casa = "Casa",
  Apartamento =  "Apartamento",
};