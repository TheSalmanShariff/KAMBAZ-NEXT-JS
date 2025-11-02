"use client";

import { 
  Container, Row, Col, Table, ListGroup, ListGroupItem,
  Form, FormControl, FormLabel, FormGroup, FormSelect,
  InputGroup, Button, Nav, NavItem, NavLink, Card,
  CardImg, CardBody, CardTitle, CardText
} from 'react-bootstrap';
import "./index.css";

export default function Lab2() {
  return (
    <Container id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      
      {/* Styling with STYLE attribute */}
      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        Style attribute allows configuring look and feel right on the element. 
        Although it's very convenient it is considered bad practice and you should 
        avoid using the style attribute
      </p>

      {/* ID Selectors */}
      <div id="wd-css-id-selectors">
        <h3>ID Selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same name, 
          e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and feel
        </p>
      </div>

      {/* Class Selectors */}
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element's CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>

      {/* Document Structure */}
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in the document
            <p className="wd-selector-3">
              This paragraph's red background is referenced as<br />
              .selector-2 .selector3<br />
              meaning the descendant of some ancestor.<br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span><br />
              You can combine these relationships to create specific styles depending on the document structure
            </p>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div id="wd-css-colors">
        <h2>Colors</h2>
        <h3 className="wd-fg-color-blue">Foreground color</h3>
        <p className="wd-fg-color-red">
          The text in this paragraph is red but{' '}
          <span className="wd-fg-color-green">this text is green</span>
        </p>
      </div>

      {/* Background Colors */}
      <div id="wd-css-background-colors">
        <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
        <p className="wd-bg-color-red wd-fg-color-black">
          This background of this paragraph is red but{' '}
          <span className="wd-bg-color-green wd-fg-color-white">
            the background of this text is green and the foreground white
          </span>
        </p>
      </div>

      {/* Borders */}
      <div id="wd-css-borders">
        <h2>Borders</h2>
        <p className="wd-border-fat wd-border-red wd-border-solid">
          Solid fat red border
        </p>
        <p className="wd-border-thin wd-border-blue wd-border-dashed">
          Dashed thin blue border
        </p>
      </div>

      {/* Padding */}
      <div id="wd-css-paddings">
        <h2>Padding</h2>
        <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
          Padded top left
        </div>
        <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
          Padded bottom right
        </div>
        <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
          Padded all around
        </div>
      </div>

      {/* Margins */}
      <div id="wd-css-margins">
        <h2>Margins</h2>
        <div className="wd-margin-bottom wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
          Margin bottom
        </div>
        <div className="wd-margin-right-left wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
          Margin left right
        </div>
        <div className="wd-margin-all-around wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
          Margin all around
        </div>
      </div>

      {/* Rounded Corners */}
      <div id="wd-css-borders">
        <h3>Rounded corners</h3>
        <p className="wd-rounded-corners-top wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
          Rounded corners on the top
        </p>
        <p className="wd-rounded-corners-bottom wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
          Rounded corners at the bottom
        </p>
        <p className="wd-rounded-corners-all-around wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
          Rounded corners all around
        </p>
        <p className="wd-rounded-corners-inline wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
          Different rounded corners
        </p>
      </div>

      {/* Dimensions */}
      <div id="wd-css-dimensions">
        <h2>Dimension</h2>
        <div>
          <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
          <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">Landscape</div>
          <div className="wd-dimension-square wd-bg-color-red">Square</div>
        </div>
      </div>

      {/* Positions - Relative */}
      <div id="wd-css-position-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray">
          <div className="wd-bg-color-yellow wd-dimension-portrait">
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
        </div>
      </div>

      {/* Positions - Absolute */}
      <div id="wd-css-position-absolute">
        <h2>Absolute position</h2>
        <div className="wd-pos-relative">
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Portrait</div>
          <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">Landscape</div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">Square</div>
        </div>
        <br /><br /><br /><br /><br /><br /><br />
      </div>

      {/* Fixed Position */}
      <div id="wd-css-position-fixed">
        <h2>Fixed position</h2>
        <p>
          Checkout the blue square that says "Fixed position" stuck all the way on the right 
          and half way down the page. It doesn't scroll with the rest of the page. Its position is "Fixed".
        </p>
        <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
          Fixed position
        </div>
      </div>

      {/* Z Index */}
      <div id="wd-z-index">
        <h2>Z index</h2>
        <div className="wd-pos-relative">
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Portrait</div>
          <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
            Landscape
          </div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">Square</div>
        </div>
        <br /><br /><br /><br /><br /><br /><br />
      </div>

      {/* Float */}
      <div id="wd-float-divs">
        <h2>Float</h2>
        <div>
          <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">Yellow</div>
          <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">Blue</div>
          <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">Red</div>
          <img className="wd-float-right" 
               src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" 
               alt="Starship" />
          <div className="wd-float-done"></div>
        </div>
      </div>

      {/* Grid Layout */}
      <div id="wd-css-grid-layout">
        <div id="wd-css-left-right-layout">
          <h2>Grid layout</h2>
          <div className="wd-grid-row">
            <div className="wd-grid-col-half-page wd-bg-color-yellow">
              <h3>Left half</h3>
            </div>
            <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
              <h3>Right half</h3>
            </div>
          </div>
        </div>
        <div id="wd-css-left-third-right-two-thirds" className="wd-grid-row">
          <div className="wd-grid-col-third-page wd-bg-color-green wd-fg-color-white">
            <h3>Left third</h3>
          </div>
          <div className="wd-grid-col-two-thirds-page wd-bg-color-red wd-fg-color-white">
            <h3>Right two thirds</h3>
          </div>
        </div>
        <div id="wd-css-side-bars" className="wd-grid-row">
          <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
            <h3>Side bar</h3>
            <p>This is the left sidebar</p>
          </div>
          <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
            <h3>Main content</h3>
            <p>This is the main content. This is the main content. This is the main content.</p>
          </div>
          <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
            <h3>Side bar</h3>
            <p>This is the right sidebar</p>
          </div>
        </div>
      </div>

      {/* Flex */}
      <div id="wd-css-flex">
        <h2>Flex</h2>
        <div className="wd-flex-row-container">
          <div className="wd-bg-color-yellow">Column 1</div>
          <div className="wd-bg-color-blue">Column 2</div>
          <div className="wd-bg-color-red wd-flex-grow-1">Column 3</div>
        </div>
      </div>

      {/* React Icons */}
      <div id="wd-react-icons-sampler" className="mb-4">
        <h3>React Icons Sampler</h3>
        <div className="d-flex">
          <span className="fs-3 text me-2">👤</span>
          <span className="fs-3 text me-2">📊</span>
          <span className="fs-3 text me-2">📚</span>
          <span className="fs-3 text me-2">📅</span>
          <span className="fs-3 text me-2">✉️</span>
          <span className="fs-3 text">🕐</span>
        </div>
      </div>

      {/* Bootstrap - Containers */}
      <h2>Bootstrap</h2>
      <div id="wd-bs-grid-system">
        <h2>Grid system</h2>
        <Row>
          <Col className="bg-danger text-white"><h3>Left half</h3></Col>
          <Col className="bg-primary text-white"><h3>Right half</h3></Col>
        </Row>
        <Row>
          <Col xs={4} className="bg-warning"><h3>One third</h3></Col>
          <Col xs={8} className="bg-success text-white"><h3>Two thirds</h3></Col>
        </Row>
        <Row>
          <Col xs={2} className="bg-black text-white"><h3>Sidebar</h3></Col>
          <Col xs={8} className="bg-secondary text-white"><h3>Main content</h3></Col>
          <Col xs={2} className="bg-info"><h3>Sidebar</h3></Col>
        </Row>
      </div>

      {/* Bootstrap Responsive */}
      <div id="wd-bs-responsive-grids">
        <h2>Responsive grid system</h2>
        <Row>
          <Col xs={12} md={6} xl={3} className="bg-warning"><h3>Column A</h3></Col>
          <Col xs={12} md={6} xl={3} className="bg-primary text-white"><h3>Column B</h3></Col>
          <Col xs={12} md={6} xl={3} className="bg-danger text-white"><h3>Column C</h3></Col>
          <Col xs={12} md={6} xl={3} className="bg-success text-white"><h3>Column D</h3></Col>
        </Row>
      </div>

      {/* Responsive Dramatic */}
      <div id="wd-bs-responsive-dramatic">
        <h2>Responsive grid system</h2>
        <Row>
          {[1,2,3,4,5,6,7,8,9,10,11,12].map((num) => (
            <Col key={num} xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} 
                 className={`${num % 4 === 1 ? 'bg-warning' : num % 4 === 2 ? 'bg-primary text-white' : num % 4 === 3 ? 'bg-danger text-white' : 'bg-success text-white'}`}>
              <h4>{num}</h4>
            </Col>
          ))}
        </Row>
      </div>

      {/* Bootstrap Tables */}
      <div id="wd-css-styling-tables">
        <h2>Tables</h2>
        <Table>
          <thead>
            <tr className="table-dark">
              <th>Quiz</th><th>Topic</th><th>Date</th><th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-warning"><td>Q1</td><td>HTML</td><td>2/3/21</td><td>85</td></tr>
            <tr className="table-danger"><td>Q2</td><td>CSS</td><td>2/10/21</td><td>90</td></tr>
            <tr className="table-primary"><td>Q3</td><td>JavaScript</td><td>2/17/21</td><td>90</td></tr>
          </tbody>
          <tfoot>
            <tr className="table-success"><td colSpan={3}>Average</td><td>90</td></tr>
          </tfoot>
        </Table>
      </div>

      {/* Responsive Tables */}
      <div id="wd-css-responsive-tables">
        <h2>Responsive tables</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
              <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
              <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
              <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
              <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Bootstrap Lists */}
      <div id="wd-css-styling-lists">
        <h2>Favorite movies</h2>
        <ListGroup>
          <ListGroupItem active>Aliens</ListGroupItem>
          <ListGroupItem>Terminator</ListGroupItem>
          <ListGroupItem>Blade Runner</ListGroupItem>
          <ListGroupItem>Lord of the Ring</ListGroupItem>
          <ListGroupItem disabled>Star Wars</ListGroupItem>
        </ListGroup>
      </div>

      {/* Hyperlink Lists */}
      <div id="wd-css-hyperlink-list">
        <h3>Favorite books</h3>
        <ListGroup>
          <ListGroupItem action active href="https://en.wikipedia.org/wiki/Dune_(novel)">
            Dune
          </ListGroupItem>
          <ListGroupItem action href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings">
            Lord of the Rings
          </ListGroupItem>
          <ListGroupItem action href="https://en.wikipedia.org/wiki/The_Forever_War">
            The Forever War
          </ListGroupItem>
          <ListGroupItem action href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)">
            2001 A Space Odyssey
          </ListGroupItem>
          <ListGroupItem action disabled href="https://en.wikipedia.org/wiki/Ender%27s_Game">
            Ender's Game
          </ListGroupItem>
          <ListGroupItem action onClick={() => alert("New book added")}>
            Add another book
          </ListGroupItem>
        </ListGroup>
      </div>

      {/* Bootstrap Forms */}
      <div id="wd-css-styling-forms">
        <h2>Forms</h2>
        <FormGroup className="mb-3" controlId="wd-email">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="name@example.com" />
        </FormGroup>
        <FormGroup className="mb-3" controlId="wd-textarea">
          <FormLabel>Example textarea</FormLabel>
          <FormControl as="textarea" rows={3} />
        </FormGroup>
      </div>

      {/* Dropdowns */}
      <div id="wd-css-styling-dropdowns">
        <h3>Dropdowns</h3>
        <FormSelect defaultValue="">
          <option value="">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </FormSelect>
      </div>

      {/* Switches */}
      <div id="wd-css-styling-switches">
        <h3>Switches</h3>
        <Form.Check type="switch" defaultChecked={false} label="Unchecked switch checkbox input"/>
        <Form.Check type="switch" defaultChecked={true} label="Checked switch checkbox input"/>
        <Form.Check type="switch" defaultChecked={false} label="Unchecked disabled switch checkbox input" disabled/>
        <Form.Check type="switch" defaultChecked={true} label="Checked disabled switch checkbox input" disabled/>
      </div>

      {/* Range Sliders */}
      <div id="wd-css-styling-range-and-sliders">
        <h3>Range</h3>
        <FormGroup controlId="wd-range1">
          <FormLabel>Example range</FormLabel>
          <Form.Range min="0" max="5" step="0.5" />
        </FormGroup>
      </div>

      {/* Addons */}
      <div id="wd-css-styling-addons">
        <h3>Addons</h3>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
          <FormControl />
        </InputGroup>
        <InputGroup>
          <FormControl />
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup>
      </div>

      {/* Responsive Forms */}
      <div id="wd-css-responsive-forms-1">
        <h3>Responsive forms</h3>
        <Form.Group as={Row} className="mb-3" controlId="email1">
          <Form.Label column sm={2}>Email</Form.Label>
          <Col sm={10}>
            <Form.Control type="email" defaultValue="email@example.com" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="password1">
          <Form.Label column sm={2}>Password</Form.Label>
          <Col sm={10}>
            <Form.Control type="password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="textarea2">
          <Form.Label column sm={2}>Bio</Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" style={{height: "100px"}}/>
          </Col>
        </Form.Group>
      </div>

      {/* Responsive Forms 2 */}
      <div id="wd-css-responsive-forms-2">
        <h3>Responsive forms</h3>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>Email</Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>Password</Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>Radios</Form.Label>
              <Col sm={10}>
                <Form.Check type="radio" label="first radio" name="formHorizontalRadios" defaultChecked/>
                <Form.Check type="radio" label="second radio" name="formHorizontalRadios"/>
                <Form.Check type="radio" label="third radio" name="formHorizontalRadios"/>
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>

      {/* Navigation Tabs */}
      <div id="wd-css-navigating-with-tabs">
        <h2>Tabs</h2>
        <Nav variant="tabs">
          <NavItem>
            <NavLink href="#/Labs/Lab2/Active">Active</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#/Labs/Lab2/Link1">Link 1</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#/Labs/Lab2/Link2">Link 2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#/Labs/Lab2/Disabled" disabled>Disabled</NavLink>
          </NavItem>
        </Nav>
      </div>

      {/* Navigation Pills - TOC */}
      <div id="wd-css-navigating-with-pills">
        <h2>Pills - Navigation</h2>
        <Nav variant="pills">
          <NavItem>
            <NavLink href="/Labs">Labs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Labs/Lab1">Lab 1</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Labs/Lab2">Lab 2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Kambaz</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/TheSalmanShariff/KAMBAZ-NEXT-JS" id="wd-github" target="_blank">
              My GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </div>

      {/* Navigation Cards */}
      <div id="wd-css-navigating-with-cards">
        <h2>Cards</h2>
        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/stacked.jpg" />
          <CardBody>
            <CardTitle>Stacking Starship</CardTitle>
            <CardText>
              Stacking the most powerful rocket in history. Mars or bust!
            </CardText>
            <Button variant="primary">Boldly Go</Button>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}