export const styles = {
  image: {
    height: "80%",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  listText: {
    margin: "10px 0",

    "& span": {
      color: "#878787",
      fontSize: "22px",
      margin: "0 4px",
    },
    "& #rate": {
      textDecoration: "line-through",
      fontSize: "18px",
    },
    "& #offer": {
      fontSize: "20px",
      color: "#388e3c",
    },
  },
  btnContainer:{
padding:"10px 20px"
  },
  addCard: {
    backgroundColor: "#ff9f00",
    fontWeight:"bold",
    letterSpacing:"0.04rem"
  },
  buy: {
    fontWeight:"bold",
    letterSpacing:"0.04rem",
    backgroundColor: "#fb641b",
  },
};
