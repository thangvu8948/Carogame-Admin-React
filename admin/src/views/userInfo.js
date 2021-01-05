import React, { Component, useEffect, useState } from "react";
import "../assets/infouser.css";
import AdminService from "../services/admin.service";
function UserInfo(props) {
  const [info, setInfo] = useState(null);
  useEffect(async () => {
    const usrs = await AdminService.getUserBy(props.id);
    const res = await usrs.json();
    if (res) {
      setInfo(res);
    }
  }, []);
  return info == null ? (
    <p>Loading</p>
  ) : (
    <div class="container emp-profile">
      <form method="post">
        <div class="row">
          <div class="col-md-4">
            <div class="profile-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                alt=""
              />
              {/* <div class="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div> */}
            </div>
          </div>
          <div class="col-md-6">
            <div class="profile-head">
              <h5>{info.Username}</h5>
              <h6>{info.Name}</h6>
              <p class="proile-rating">
                Score : <span>{info.Score}</span>
              </p>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Achievements
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div class="col-md-2">
            <input
              type="submit"
              class="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div> */}
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              <p>Recent (5 Battles)</p>
              {/* 10 tran gan nhat */}
              <a href="">Website Link</a>
              <br />
              <a href="">Bootsnipp Profile</a>
              <br />
              <a href="">Bootply Profile</a>
              {/* <p>SKILLS</p> */}
              <a href="">Web Designer</a>
              <br />
              <a href="">Web Developer</a>
              <br />
              <a href="">WordPress</a>
              <br />
              {/* <a href="">WooCommerce</a>
              <br />
              <a href="">PHP, .Net</a>
              <br /> */}
              <br />
              <button type="button" class="btn btn-info">
                <a href={`/users/${props.id}/battles`}> Show More</a>
              </button>
            </div>
          </div>
          <div class="col-md-8">
            <div class="tab-content profile-tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div class="col-md-6">
                    <p>{info.Username}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Name</label>
                  </div>
                  <div class="col-md-6">
                    <p>{info.Name}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Email</label>
                  </div>
                  <div class="col-md-6">
                    <p>{info.Email}</p>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>Score</label>
                  </div>
                  <div class="col-md-6">
                    <p>{info.Score}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Win rate</label>
                  </div>
                  <div class="col-md-6">
                    <p>
                      {info.WinBattle /
                        (info.WinBattle + info.DrawBattle + info.DefeatBattle)}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Total</label>
                  </div>
                  <div class="col-md-6">
                    <p>
                      {info.WinBattle + info.DrawBattle + info.DefeatBattle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserInfo;
