import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const { initialInvestment, duration } = userInput;

  if (duration <= 0) {
    return (
      <section id="result">
        <p className="center">
          Please enter a valid duration that is greater than 0.
        </p>
      </section>
    );
  }

  const annualData = calculateInvestmentResults(userInput);

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
