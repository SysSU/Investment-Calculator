export default function Calculator({inputValues}) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } = inputValues;
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input type="number" id="initial-investment" defaultValue={initialInvestment} required />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" defaultValue={annualInvestment} required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" defaultValue={expectedReturn} required />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" defaultValue={duration} required />
        </p>
      </div>
    </section>
  );
}
