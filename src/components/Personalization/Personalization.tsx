import RegisterTopBar from "../RegisterTopBar/RegisterTopBar";

const Personalization = () => {
  return (
    <>
      <RegisterTopBar />

      <form>
        <label>
          Що вас цікавить у нашій організації найбільше?
          <input type="text" placeholder="Наприклад, тематичні івенти" />
        </label>
      </form>
    </>
  );
};

export default Personalization;
