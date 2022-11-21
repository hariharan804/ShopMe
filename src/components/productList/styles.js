export const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  productImage: {
    width: "200px",
    height: "200px",
  },
  innerContainer: {
    padding: "10px",
  },
  productTitle: {
    width: "98%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  card:{ 
paddingTop:"10px",
    "&:hover":{
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      // boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
    }
  }
};
