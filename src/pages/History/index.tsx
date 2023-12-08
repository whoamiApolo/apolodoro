import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Tempo</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Treino A</td>
              <td>55 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green">concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Treino B</td>
              <td>75 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green">concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Treino C</td>
              <td>60 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green">concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Treino A</td>
              <td>60 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green">concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Treino B</td>
              <td>63 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green">concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Treino C</td>
              <td>50 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statusColor="green">concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
