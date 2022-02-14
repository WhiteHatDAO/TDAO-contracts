import { Button, Col, Image, Row, Select } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/talent-logo.png";

function Footer() {
  return (
    <footer>
      <div className="bg-white rounded-2xl py-8 px-36">
        <Row>
          <Col span={8}>
            <Image className="h-3 -ml-11" src={logo} alt="talent dao logo" />
            <Row>
              <Col span={12}>
                <div className="">
                  <h3>TalentDAO</h3>
                  <hr />
                  <ul>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/subscribe">Subscribe</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <h3>Community</h3>
                  <hr />
                  <ul>
                    <li>
                      <Link href="/coming_soon">Token</Link>
                    </li>
                    <li>
                      <Link href="/governance">Governance</Link>
                    </li>
                    <li>
                      <Link href="/suggest_feature">Suggest Feature</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          {/* Right Section */}
          <Col span={12} className="">
            <div className="text-right mr-7 mb-5">
              <Select width={180}>
                <option>Hello</option>
              </Select>
              <Button>Tweet</Button>
              <Button>Discord</Button>
            </div>
            <div className="bg-gray-200 rounded-3xl p-4 m-4 ml-11 max-w-sm">
              <h3>Lets get started</h3>
              <p>Explore the journal of decentralized work</p>
              <Button>Contact Us</Button>
              <Button>Join Us</Button>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
