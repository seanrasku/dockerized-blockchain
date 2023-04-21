import axios from "axios";

const getContract = async () => {
  try {
    console.log(process.env.REACT_APP_API);
    const c = await axios.post("http://localhost:8000/api/contract", {
      name: "Agreement",
    });
    return c;
  } catch (err) {
    console.log(err);
  }
};

export default getContract;
