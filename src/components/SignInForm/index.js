export default function SignInForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="nome" className="text-gray-500 text-sm">
          Nome
        </label>
        <input
          id="nome"
          type="text"
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="text-gray-500 text-sm">
          Email
        </label>
        <input
          id="email"
          type="text"
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telefone" className="text-gray-500 text-sm">
          Telefone
        </label>
        <input
          id="telefone"
          type="text"
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contato_emergencia" className="text-gray-500 text-sm">
          Contato de emergência
        </label>
        <input
          id="contato_emergencia"
          type="text"
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="flex gap-5">
        <button
          onClick={(e) => e.preventDefault()}
          className="bg-blue-500 text-white h-12 rounded w-full"
        >
          Cadastrar
        </button>
        <button
          onClick={(e) => e.preventDefault()}
          className="bg-gray-300 rounded h-12 w-full"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
