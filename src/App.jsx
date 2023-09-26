import { useState } from 'react';
import './App.css';
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [deadline, setDeadline] = useState(new Date());
  const [topTier, setTopTier] = useState(0);
  const [midTier, setMidTier] = useState(0);
  const [paperOption, setPaperOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("pages");

  //This list used to calculate price based on which topTier and midTier selected
  const topTierList = [
    {
      title: "Academic",
      hs: 12,
      ug: 15,
      b: 21,
      p: 25,
    },
    {
      title: "Editing",
      hs: 3,
      ug: 5,
      b: 7,
      p: 13,
    },
    {
      title: "Calculations",
      hs: 18,
      ug: 23,
      b: 32,
      p: 38,
    }
  ];

  const midTierList = ["hs", "ug", "b", "p"];

  //Select Options for Type of Paper
  const paperSelectOptions = [
    { value: "Research paper", label: "Research paper" },
    { value: "Research proposal", label: "Research proposal" },
    { value: "Speech", label: "Speech" },
    { value: "Thesis", label: "Thesis" },
    { value: "Thesis proposal", label: "Thesis proposal" },
    { value: "Thesis statement", label: "Thesis statement" },
  ];

  // handling top-tier option
  const handleTopTierClick = (val) => {
    setTopTier(val);
  }

  // handling mid-tier option
  const handleMidTierClick = (val) => {
    setMidTier(val);
  }

  return (
    <div className="home-calc">
      <div className="calculater-c">
        <div className="calculator">
          <div id="top-tier" className='tier'>
            <div className={`btn-tier ${topTier === 0 ? 'highlight' : ''}`} onClick={() => handleTopTierClick(0)}>
              <p>Academic Writing</p>
            </div>
            <div className={`btn-tier ${topTier === 1 ? 'highlight' : ''}`} onClick={() => handleTopTierClick(1)}>
              <p>Editing and proofreading</p>
            </div>
            <div className={`btn-tier ${topTier === 2 ? 'highlight' : ''}`} onClick={() => handleTopTierClick(2)}>
              <p>Calculations</p>
            </div>
          </div>
          <div id="mid-tier" className='tier'>
            <div
              className={`btn-tier ${midTier === 0 ? "highlight" : ""}`} onClick={() => handleMidTierClick(0)}>
              <p>High School</p>
            </div>
            <div className={`btn-tier ${midTier === 1 ? "highlight" : ""}`} onClick={() => handleMidTierClick(1)}>
              <p>Undergraduate</p>
            </div>
            <div className={`btn-tier ${midTier === 2 ? "highlight" : ""}`} onClick={() => handleMidTierClick(2)}>
              <p> Bachelor</p>
            </div>
            <div className={`btn-tier ${midTier === 3 ? "highlight" : ""}`} onClick={() => handleMidTierClick(3)}>
              <p> Professional</p>
            </div>
          </div>
          <div className="paper-select">
            <p>Type of paper</p>
            <Select className="select-box" defaultValue={paperOption} options={paperSelectOptions} onChange={setPaperOption} />
          </div>
          <div className="quantity-c">
            <div className="pw-ip-c">
              <div>
                <p>Quantity</p>
                <div className="quantity">
                  <input type="number"
                    value={selectedOption === "pages" ? quantity : quantity * 275}
                    onChange={(e) => {
                      if (e.target.value != 0 && e.target.value <= 100) {
                        setQuantity(e.target.value);
                      }
                    }} />
                </div>
              </div>
              <div className="pw-c">
                <div className="pw">
                  <div className={`${selectedOption === "pages" ? "highlight" : ""}`} onClick={() => setSelectedOption("pages")}>Pages</div>
                  <div className={`${selectedOption === "words" ? "highlight" : ""}`} onClick={() => setSelectedOption("words")}>Words</div>
                </div>
              </div>
            </div>
            <div className="calen-c">
              <p>Deadline</p>
              <div className="calen">
                <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} />
              </div>
            </div>
          </div>
          <div className="price-c">
            <div className="price-main">
              <p>Approx. Price</p>
              <div className="price">
                <h2> {`$${quantity * topTierList[topTier][midTierList[midTier]]}`} </h2>
              </div>
            </div>
            <div className="order-btn">
              <button>PROCEED TO ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
