// EXERCÍCIO 6: formulário de contato
export default function Contato() {
  function handleSubmit(evento) {
    evento.preventDefault()
    alert('Mensagem enviada! (de mentirinha)')
  }

  const estiloCampo =
    'w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500'

  return (
    <section id="contato" className="max-w-xl mx-auto px-4 py-16">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-center">Fale com a gente</h2>

        <div>
          <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome</label>
          <input className={estiloCampo} type="text" id="nome" placeholder="Seu nome" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
          <input className={estiloCampo} type="email" id="email" placeholder="Seu e-mail" />
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea
            className={`${estiloCampo} h-32`}
            id="mensagem"
            placeholder="Escreva sua mensagem..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-500 text-stone-900 font-bold py-2 px-4 rounded-lg"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}

