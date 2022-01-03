import React from "react";
import PropTypes from "prop-types";

/**
 * This layout component will only render the schema section
 *   of an OAS3 file.
 */
class SchemaOnlyLayout extends React.Component {
  render() {
    const { getComponent } = this.props;
    console.log(this.props);
    const Models = getComponent("Models", true);
    let VersionPragmaFilter = getComponent("VersionPragmaFilter");
    let Errors = getComponent("errors", true);
    let Col = getComponent("Col");
    let Row = getComponent("Row");
    const ErrorBoundary = getComponent("ErrorBoundary", true);

    return (
      <div className="swagger-ui">
        <ErrorBoundary targetName="BaseLayout">
          <VersionPragmaFilter isOAS3={true} alsoShow={<Errors />}>
            <Errors />
            <Row>
              <Col mobile={12} desktop={12}>
                <Models />
              </Col>
            </Row>
          </VersionPragmaFilter>
        </ErrorBoundary>
      </div>
    );
  }
}
// Create the plugin that provides our layout component
const SchemaOnlyLayoutPlugin = () => {
  return {
    components: {
      SchemaOnlyLayout: SchemaOnlyLayout,
    },
  };
};

SchemaOnlyLayout.propTypes = {
  getComponent: PropTypes.func.isRequired,
};

export default SchemaOnlyLayoutPlugin;
