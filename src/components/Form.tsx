type FormPropsType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = (props: FormPropsType) => {
  const { setCity, getWeather, city } = props;

  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />

      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
