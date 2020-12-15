import React from "react";
import axios from "axios";

import DemoCard from "../demoCard/demoCard.component";

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    const getUserData = async () => {
      try {
        const userData = await axios.get(
          "https://run.mocky.io/v3/1acb6b7d-af22-46ab-9b63-4582813ad7e6"
        );
        await this.setState({
          users: userData.data.result,
        });
      } catch (err) {
        console.log("this is an error in the user API: ", err);
      }
    };
    getUserData();
  }

  render() {
    return (
      <div>
        <DemoCard users={this.state.users} />
      </div>
    );
  }
}

export default Demo;
