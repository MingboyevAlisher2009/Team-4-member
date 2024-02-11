import React from "react";
import "./card.css";

function Card() {
  return (
    <section>
      <div className="portfoli-container px-8 flex justify-evenly items-center flex-wrap">
        <div className="portfoli-card w-96 mt-16">
          <div className="portfoli-img">
            <img
              className="mx-auto mt-9 rounded-3xl"
              src="https://picsum.photos/300/300?random=1"
              alt=""
            />
          </div>
          <div className="portfoli-avatar">
            <img
              className="rounded-full inline-block mt-28 ml-5"
              src="https://picsum.photos/50/50?random=2"
              alt=""
            />
            <img
              className="rounded-full inline-block absolute left-10 mt-28"
              src="https://picsum.photos/50/50?random=3"
              alt=""
            />
          </div>
          <div className="portfoli-like">
            <input type="checkbox" id="like" />
            <label htmlFor="like">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 30 30"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="portfoli-card w-96 mt-16">
          <div className="portfoli-img">
            <img
              className="mx-auto mt-9 rounded-3xl"
              src="https://picsum.photos/300/300?random=4"
              alt=""
            />
          </div>
          <div className="portfoli-avatar">
            <img
              className="rounded-full inline-block mt-28 ml-5"
              src="https://picsum.photos/50/50?random=5"
              alt=""
            />
            <img
              className="rounded-full inline-block absolute left-10 mt-28"
              src="https://picsum.photos/50/50?random=6"
              alt=""
            />
            <div className="outher-owner inline-block rounded-full w-12 h-12 mt-10 -ml-1 absolute">
              <h1 className="inline-block text-2xl mx-2 mt-2">+2</h1>
            </div>
          </div>
          <div className="portfoli-like">
            <input type="checkbox" id="like1" />
            <label htmlFor="like1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 30 30"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="portfoli-card w-96 mt-16">
          <div className="portfoli-img">
            <img
              className="mx-auto mt-9 rounded-3xl"
              src="https://picsum.photos/300/300?random=7"
              alt=""
            />
          </div>
          <div className="portfoli-avatar">
            <img
              className="rounded-full inline-block mt-28 ml-5"
              src="https://picsum.photos/50/50?random=8"
              alt=""
            />
            <img
              className="rounded-full inline-block absolute left-10 mt-28"
              src="https://picsum.photos/50/50?random=9"
              alt=""
            />
          </div>
          <div className="portfoli-like">
            <input type="checkbox" id="like2" />
            <label htmlFor="like2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 30 30"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="portfoli-card w-96 mt-16">
          <div className="portfoli-img">
            <img
              className="mx-auto mt-9 rounded-3xl"
              src="https://picsum.photos/300/300?random=10"
              alt=""
            />
          </div>
          <div className="portfoli-avatar">
            <img
              className="rounded-full inline-block mt-28 ml-5"
              src="https://picsum.photos/50/50?random=11"
              alt=""
            />
            <img
              className="rounded-full inline-block absolute left-10 mt-28"
              src="https://picsum.photos/50/50?random=12"
              alt=""
            />
          </div>
          <div className="portfoli-like">
            <input type="checkbox" id="like3" />
            <label htmlFor="like3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 30 30"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="portfoli-card w-96 mt-16">
          <div className="portfoli-img">
            <img
              className="mx-auto mt-9 rounded-3xl"
              src="https://picsum.photos/300/300?random=1"
              alt=""
            />
          </div>
          <div className="portfoli-avatar">
            <img
              className="rounded-full inline-block mt-28 ml-5"
              src="https://picsum.photos/50/50?random=13"
              alt=""
            />
            <img
              className="rounded-full inline-block absolute left-10 mt-28"
              src="https://picsum.photos/50/50?random=14"
              alt=""
            />
          </div>
          <div className="portfoli-like">
            <input type="checkbox" id="like4" />
            <label htmlFor="like4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 30 30"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="portfoli-card w-96 mt-16">
          <div className="portfoli-img">
            <img
              className="mx-auto mt-9 rounded-3xl"
              src="https://picsum.photos/300/300?random=15"
              alt=""
            />
          </div>
          <div className="portfoli-avatar">
            <img
              className="rounded-full inline-block mt-28 ml-5"
              src="https://picsum.photos/50/50?random=16"
              alt=""
            />
            <img
              className="rounded-full inline-block absolute left-10 mt-28"
              src="https://picsum.photos/50/50?random=17"
              alt=""
            />
            <div className="outher-owner inline-block rounded-full w-12 h-12 mt-10 -ml-1 absolute">
              <h1 className="inline-block text-2xl mx-2 mt-2">+3</h1>
            </div>
          </div>
          <div className="portfoli-like">
            <input type="checkbox" id="like5" />
            <label htmlFor="like5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 30 30"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
