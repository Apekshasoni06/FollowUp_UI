import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <div class="sidebar">
          <ul>
            <li>
              <a href="#" class="active">
                <span class="icon">
                  <i class="fas fa-home"></i>
                </span>
                <span class="item">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/color/48/azure-1.png"
                    alt="azure-1"
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <i class="fas fa-desktop"></i>
                </span>
                <span class="item">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/material-outlined/24/home--v2.png"
                    alt="home--v2"
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <i class="fas fa-user-friends"></i>
                </span>
                <span class="item">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/sf-regular/48/layers.png"
                    alt="layers"
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <i class="fas fa-tachometer-alt"></i>
                </span>
                <span class="item">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios/50/search--v1.png"
                    alt="search--v1"
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <i class="fas fa-database"></i>
                </span>
                <span class="item">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/pastel-glyph/64/bar-chart--v2.png"
                    alt="bar-chart--v2"
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <i class="fas fa-chart-line"></i>
                </span>
                <span class="item">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios/50/speech-bubble--v1.png"
                    alt="speech-bubble--v1"
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <i class="fas fa-user-shield"></i>
                </span>
                <span class="item">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/sf-ultralight/25/user-group-man-man.png"
                    alt="user-group-man-man"
                  />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <main class="main-content">
        <section class="main-container">
          <div class="content-box">
            <h4 class="h1">GET MORE REVIEWS</h4>
            <h2 class="h2">Followup Reminder</h2>
          </div>
          <div class="message">
            <img
              width="18"
              height="16"
              src="https://img.icons8.com/ios/50/info--v1.png"
              alt="info--v1"
            />
            <p class="status">Updated 8 hours ago</p>
          </div>
          <div class="btn">
            <button type="button">Settings</button>
          </div>
        </section>
        <section class="second-content">
          <div class="info">
            <div class="info-rate">
              <h6>REVIEW RATE</h6>
              <img
                width="18"
                height="16"
                src="https://img.icons8.com/ios/50/info--v1.png"
                alt="info--v1"
              />
            </div>
            <div class="rate">
              <h2>19.12%</h2>
            </div>
          </div>
          <div class="info1">
            <div class="info-rate">
              <h6>REVIEW SCORE</h6>
              <img
                width="18"
                height="16"
                src="https://img.icons8.com/ios/50/info--v1.png"
                alt="info--v1"
              />
            </div>
            <div class="rate">
              <h2>4.9</h2>
            </div>
          </div>
          <div class="info1">
            <div class="info-rate">
              <h6>Total Reviews</h6>
              <img
                width="18"
                height="16"
                src="https://img.icons8.com/ios/50/info--v1.png"
                alt="info--v1"
              />
            </div>
            <div class="rate">
              <h2>1160</h2>
            </div>
          </div>
          <div class="info1">
            <div class="info-rate">
              <h6>SEND NOW</h6>
              <img
                width="18"
                height="16"
                src="https://img.icons8.com/ios/50/info--v1.png"
                alt="info--v1"
              />
            </div>
            <div class="rate">
              <h2>176</h2>
            </div>
          </div>
        </section>
        <section class="third-content">
          <div class="container">
            <div class="above-table">
              <div class="heading">
                <h2>Follow up</h2>
              </div>
              <div class="filter">
                <h4>Filter:</h4>
                <select name="cars" id="cars">
                  <option value="volvo">Send now(176)</option>
                  <option value="saab">Saab</option>
                </select>
              </div>
            </div>

            <ul class="responsive-table">
              <li class="table-header">
                <div class="col col-0">
                  <label class="custom-checkbox">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                  </label>
                </div>

                <div class="col col-1">CUSTOMER</div>
                <div class="col col-2">ORDER ID</div>
                <div class="col col-3">DATE</div>
                <div class="col col-4">REVIEW</div>
                <div class="col col-5">STATUS</div>
              </li>
              <li class="table-row">
                <div class="col col-0">
                  <label class="custom-checkbox">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                  </label>
                </div>
                <div class="col col-1" data-label="Job Id">
                  Maria
                </div>
                <div class="col col-2" data-label="Customer Name">
                  #2554386004
                </div>
                <div class="col col-3" data-label="Amount">
                  Aug 02 2022
                </div>
                <div class="col col-4" data-label="Amount">
                  <div class="round">None</div>
                </div>
                <div class="col col-5" data-label="Payment Status">
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/emoji/48/yellow-circle-emoji.png"
                    alt="yellow-circle-emoji"
                  />
                  Send now
                </div>
              </li>
              <li class="table-row">
                <div class="col col-0">
                  <label class="custom-checkbox">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                  </label>
                </div>
                <div class="col col-1" data-label="Job Id">
                  Linda
                </div>
                <div class="col col-2" data-label="Customer Name">
                  #255470192
                </div>
                <div class="col col-3" data-label="Amount">
                  Aug 01 2022
                </div>
                <div class="col col-4" data-label="Amount">
                  <div class="round">None</div>
                </div>
                <div class="col col-5" data-label="Payment Status">
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/emoji/48/yellow-circle-emoji.png"
                    alt="yellow-circle-emoji"
                  />
                  Send now
                </div>
              </li>
              <li class="table-row">
                <div class="col col-0">
                  <label class="custom-checkbox">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                  </label>
                </div>
                <div class="col col-1" data-label="Job Id">
                  John Smith
                </div>
                <div class="col col-2" data-label="Customer Name">
                  #255470192
                </div>
                <div class="col col-3" data-label="Amount">
                  Aug 01 2022
                </div>
                <div class="col col-4" data-label="Amount">
                  <div class="round">None</div>
                </div>
                <div class="col col-5" data-label="Payment Status">
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/emoji/48/yellow-circle-emoji.png"
                    alt="yellow-circle-emoji"
                  />
                  Send now
                </div>
              </li>
              <li class="table-row">
                <div class="col col-0">
                  <label class="custom-checkbox">
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                  </label>
                </div>
                <div class="col col-1" data-label="Job Id">
                  John Carpenter
                </div>
                <div class="col col-2" data-label="Customer Name">
                  #255470192
                </div>
                <div class="col col-3" data-label="Amount">
                  Aug 01 2022
                </div>
                <div class="col col-4" data-label="Amount">
                  <div class="round">None</div>
                </div>
                <div class="col col-5" data-label="Payment Status">
                  <img
                    width="15"
                    height="15"
                    src="https://img.icons8.com/emoji/48/yellow-circle-emoji.png"
                    alt="yellow-circle-emoji"
                  />
                  Send now
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
