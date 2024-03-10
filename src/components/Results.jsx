import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userInput;
  const annualData = calculateInvestmentResults(userInput);

  console.log(annualData);
  return (
    <section id="results">
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map(
            ({ year, valueEndOfYear, interest, annualInvestment }) => {
              const totalInterest =
                valueEndOfYear - annualInvestment * year - initialInvestment;
              const totalInvested = valueEndOfYear - totalInterest;
              return (
                <tr key={year}>
                  <td>{year}</td>
                  <td>{formatter.format(valueEndOfYear)}</td>
                  <td>{formatter.format(interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalInvested)}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </section>
  );
}
