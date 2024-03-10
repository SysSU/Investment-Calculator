export default function Calculator({userInputValues, setUserInput}) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } = userInputValues;

  function handleOnChange(e) {
    const { id, value } = e.target;
    setUserInput((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input type="number" id="initialInvestment" value={initialInvestment} onChange={(e) => handleOnChange(e)} required />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input type="number" id="annualInvestment" value={annualInvestment} onChange={(e) => handleOnChange(e)} required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input type="number" id="expectedReturn" value={expectedReturn} onChange={(e) => handleOnChange(e)} required />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" value={duration} onChange={(e) => handleOnChange(e)} required />
        </p>
      </div>
    </section>
  );
}
