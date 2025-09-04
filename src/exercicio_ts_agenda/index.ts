// agenda.ts

interface Evento {
    id: number;
    nome: string;
    inicio: Date;
    fim: Date;
}

class Agenda {
    private eventos: Evento[] = [];
    private idCounter = 1;

    adicionarEvento(nome: string, inicio: string, fim: string): void {
        const dataInicio = new Date(inicio);
        const dataFim = new Date(fim);

        if (dataFim <= dataInicio) {
            console.log('❌ O fim deve ser depois do início.');
            return;
        }

        const novo: Evento = {
            id: this.idCounter++,
            nome,
            inicio: dataInicio,
            fim: dataFim,
        };

        this.eventos.push(novo);
        console.log(`📅 Evento adicionado: ${nome}`);
    }

    listarEventos(): void {
        if (this.eventos.length === 0) {
            console.log('Nenhum evento agendado.');
            return;
        }

        console.log('\n=== Eventos Agendados ===');
        this.eventos
            .sort((a, b) => a.inicio.getTime() - b.inicio.getTime())
            .forEach((e) => {
                console.log(
                    `#${e.id} - ${e.nome} | ${e.inicio.toLocaleString()} → ${e.fim.toLocaleString()} ${this.temConflito(e) ? '⚠️ Conflito' : ''}`,
                );
            });
    }

    private temConflito(evento: Evento): boolean {
        return this.eventos.some((e) => e.id !== evento.id && e.inicio < evento.fim && e.fim > evento.inicio);
    }

    estatisticas(): void {
        const total = this.eventos.length;
        const comConflito = this.eventos.filter((e) => this.temConflito(e)).length;

        console.log('\n=== Estatísticas ===');
        console.log(`Total de eventos: ${total}`);
        console.log(`Eventos com conflito: ${comConflito}`);
    }

    removerEvento(id: number): void {
        const antes = this.eventos.length;
        this.eventos = this.eventos.filter((e) => e.id !== id);
        if (this.eventos.length < antes) {
            console.log(`🗑️ Evento #${id} removido.`);
        } else {
            console.log('Evento não encontrado.');
        }
    }
}

// ======================
// Simulação no console
// ======================
const agenda = new Agenda();

agenda.adicionarEvento('Reunião Equipe', '2025-09-05T10:00', '2025-09-05T11:00');
agenda.adicionarEvento('Call Cliente', '2025-09-05T10:30', '2025-09-05T11:30'); // Conflito
agenda.adicionarEvento('Estudo TS', '2025-09-05T14:00', '2025-09-05T16:00');

agenda.listarEventos();
agenda.estatisticas();

agenda.removerEvento(2);
agenda.listarEventos();
agenda.estatisticas();
