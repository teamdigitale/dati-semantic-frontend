import SwaggerUI from "swagger-ui-react";
import { baseUrl } from "../../services/fetchUtils";
import "swagger-ui-react/swagger-ui.css";

const Swagger = () => {
  return (
    <div>
      <SwaggerUI url={baseUrl() + "/api-docs.yaml"} />
    </div>
  );
};

export default Swagger;
