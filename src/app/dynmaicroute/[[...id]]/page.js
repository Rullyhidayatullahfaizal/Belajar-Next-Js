const DynamicRoute = ({ params }) => {
    return (
      <>
        <h1>{params.id ? "Dynamic Routenya adalha " :"dynamic rude tidak ada " }</h1>
        {params.id && (
          <>
            <h2>params pertama{params.id[0]}</h2>
            <h3>params kedua{params.id[1]}</h3>
            <h4>params ketiga {params.id[2]}</h4>
          </>
        )}
      </>
    );
  };
  
  export default DynamicRoute;