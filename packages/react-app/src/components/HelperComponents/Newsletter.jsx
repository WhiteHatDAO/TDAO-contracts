import { Button, Col, Input, Row } from "antd";

function Newsletter() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-black to-red-900 rounded-3xl ml-5 mr-5"
          aria-hidden="true"
        />
      </div>
      <Row className="py-8">
        <Col span={12}>Image</Col>
        <Col span={12}>
          <h1 className="text-right mr-11 text-red-100 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Sign up for the updates
          </h1>
          <p className="mt-6 mr-11 text-2xl text-right text-red-200 mb-1">
            We’ll keep you up to date with our latest news,<br/> announcements, and development plans.
          </p>
          <p className="text-right text-red-200 mb-8 mr-11">No Spam Policy!</p>
          <div className="text-right mr-11">
            <Input type="email" className="max-w-sm mr-2" />
            <Button className="ml-8" onClick={() => {}}>
              Tumb
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Newsletter;
