interface MensagemProps {
  mensagem: String;
}

const Mensagem: React.FC<MensagemProps> = (props: MensagemProps) => {
  return <div>{props.mensagem}</div>;
};

function MeuComponente() {
  return <div>{<Mensagem mensagem="Meu Programa" />}</div>;
}

export default MeuComponente;
