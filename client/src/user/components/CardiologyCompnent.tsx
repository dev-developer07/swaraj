import { useEffect, useMemo, type FunctionComponent, type CSSProperties } from "react";
import { useParams } from "react-router-dom";
import { getSpecialtyData, type SpecialtyData } from "../data/specialtyData";

const CARDIOLOGY_STYLES = `
@import url("https://fonts.googleapis.com/css2?family=Lilex:ital,wght@0,400;0,500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Stack+Sans+Text:ital,wght@0,400;0,500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600&display=swap");

:root {
  --color-dimgray: #505050;
  --color-gainsboro-100: #e6e6e6;
  --color-gainsboro-200: rgba(230, 230, 230, 0.5);
  --color-gray-100: #7e7f80;
  --color-gray-200: #1f2a44;
  --color-gray-300: #0b0c0f;
  --color-gray-400: rgba(255, 255, 255, 0.16);
  --color-gray-500: rgba(255, 255, 255, 0.8);
  --color-gray-600: rgba(11, 12, 15, 0.5);
  --color-gray-700: rgba(11, 12, 15, 0.3);
  --color-lightslategray: #7791a5;
  --color-slategray: #525e78;
  --color-white: #fff;
  --color-whitesmoke: #f1f2f1;
  --gap-4: 4px; --gap-12: 12px; --gap-16: 16px; --gap-20: 20px; --gap-32: 32px; --gap-60: 60px;
  --padding-0: 0px; --padding-01: 0; --padding-4: 4px; --padding-5: 5px; --padding-6: 6px; --padding-8: 8px; --padding-12: 12px; --padding-14: 14px; --padding-20: 20px; --padding-24: 24px; --padding-32: 32px; --padding-36: 36px; --padding-52: 52px; --padding-80: 80px; --padding-100: 100px; --padding-140: 140px; --padding-0_7: 0.7px; --padding-18_8: 18.8px;
  --br-4: 4px; --br-8: 8px; --br-12: 12px; --br-16: 16px;
  --font-inter: Inter, Arial, sans-serif; --font-lilex: Lilex, Arial, sans-serif; --font-stack-sans-text: Stack Sans Text, Arial, sans-serif;
  --fs-14: 14px; --fs-16: 16px; --fs-18: 18px; --fs-19: 19px; --fs-20: 20px; --fs-22: 22px; --fs-24: 24px; --fs-26: 26px; --fs-29: 29px; --fs-30: 30px; --fs-32: 32px; --fs-36: 36px; --fs-48: 48px; --fs-64: 64px; --fs-100: 100px;
  --border-1: 1px solid var(--color-gainsboro-100);
  --height-2: 2px; --height-19: 19px; --height-20: 20px; --height-32: 32px; --height-50: 50px; --height-100: 100px; --height-250: 250px; --height-275: 275px;
  --min-w-193: 193px; --min-w-226: 226px;
  --width-20: 20px; --width-100: 100px; --width-220: 220px; --width-662: 662px; --width-670: 670px;
  --lh-24: 24px; --lh-26: 26px; --lh-28: 28px; --lh-32: 32px; --lh-36: 36px; --lh-48: 48px; --lh-72: 72px; --lh-28_8: 28.8px;
  --ls--1_5: -1.5px;
}

.cs-page { width: 100%; position: relative; line-height: normal; letter-spacing: normal; display: flex; flex-direction: column; align-items: center; }
.cs-main-section { align-self: stretch; display: flex; flex-direction: column; align-items: center; padding: var(--padding-140) var(--padding-0) var(--padding-100); box-sizing: border-box; gap: 80px; max-width: 100%; text-align: left; font-size: var(--fs-20); color: var(--color-gray-300); font-family: var(--font-lilex); }
.cs-marquee-wrap { width: 1920px; height: 160px; position: relative; overflow: hidden; flex-shrink: 0; display: none; }
.cs-marquee-row { position: absolute; top: calc(50% - 80px); left: -585.9px; display: flex; align-items: center; gap: var(--gap-60); flex-shrink: 0; }
.cs-marquee-row2 { position: absolute; top: calc(50% - 80px); left: 1518.1px; display: flex; align-items: center; gap: var(--gap-60); flex-shrink: 0; }
.cs-marquee-row3 { position: absolute; top: calc(50% - 80px); left: 3622.1px; display: flex; align-items: center; justify-content: center; gap: var(--gap-60); flex-shrink: 0; }
.cs-marquee-item { display: flex; align-items: center; gap: var(--gap-16); max-width: 100%; }
.cs-marquee-img { height: var(--height-100); width: var(--width-100); position: relative; border-radius: var(--br-12); object-fit: cover; }
.cs-marquee-rect { width: 240px; position: relative; }
.cs-marquee-label-wrap { display: flex; flex-direction: column; align-items: flex-start; padding: var(--padding-20) var(--padding-0); }
.cs-marquee-label { position: relative; line-height: var(--lh-32); text-transform: uppercase; font-weight: 500; }
.cs-marquee-item2 { display: flex; align-items: center; gap: var(--gap-16); max-width: 100%; }
.cs-marquee-img3-wrap { border-radius: var(--br-12); overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.cs-marquee-img3 { width: var(--width-100); height: var(--height-100); position: relative; object-fit: cover; }
.cs-marquee-img4 { width: var(--width-100); height: var(--height-100); position: relative; object-fit: cover; border-radius: var(--br-12); }
.cs-marquee-rect2 { width: 228px; position: relative; }
.cs-marquee-img-blank { height: var(--height-100); width: var(--width-100); border-radius: var(--br-12); overflow: hidden; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.cs-marquee-rect3 { width: 264px; position: relative; }
.cs-contact-section { width: 1400px; display: flex; align-items: flex-start; justify-content: space-between; padding: var(--padding-140) var(--padding-20); box-sizing: border-box; gap: var(--gap-20); }
.cs-form-wrap { align-self: stretch; width: 712px; display: flex; flex-direction: column; align-items: flex-start; padding: 44px var(--padding-0) 15px; max-width: 712px; box-sizing: border-box; }
@media screen and (max-width: 1825px) { .cs-marquee-wrap { height: auto; min-height: 160px; } .cs-marquee-row, .cs-marquee-row2, .cs-marquee-row3 { flex-wrap: wrap; } }
@media screen and (max-width: 1350px) { .cs-main-section { gap: 40px; padding-top: 59px; padding-bottom: 42px; box-sizing: border-box; } .cs-contact-section { padding-top: 91px; padding-bottom: 91px; box-sizing: border-box; } }
@media screen and (max-width: 925px) { .cs-main-section { gap: var(--gap-20); padding-top: 38px; padding-bottom: 27px; box-sizing: border-box; } .cs-contact-section { padding-top: 59px; padding-bottom: 59px; box-sizing: border-box; } .cs-form-wrap { padding-top: 29px; padding-bottom: var(--padding-20); box-sizing: border-box; max-width: 100%; } }
@media screen and (max-width: 450px) { .cs-main-section { padding-top: 25px; padding-bottom: var(--padding-20); box-sizing: border-box; } .cs-marquee-label { font-size: var(--fs-16); line-height: var(--lh-26); } .cs-marquee-item2 { flex-wrap: wrap; } .cs-marquee-img3-wrap { flex: 1; } .cs-marquee-img3 { align-self: stretch; width: 100%; } .cs-marquee-img4, .cs-marquee-img-blank { flex: 1; } }

.cs-hero { align-self: stretch; overflow: hidden; display: flex; flex-direction: column; align-items: flex-start; padding: 0 80px 80px; position: relative; min-height: 480px; box-sizing: border-box; }
.cs-hero-bg { position: absolute; margin: 0 !important; bottom: 0; flex-shrink: 0; width: 100%; height: 100%; top: 0; left: 0; filter: blur(0); max-width: 100%; overflow: hidden; max-height: 100%; object-fit: cover; object-position: center 58%; z-index: 0; }
.cs-hero-paint { position: absolute; margin: 0 !important; bottom: 0; flex-shrink: 0; width: 100%; height: 100%; top: 0; right: 0; left: 0; background-color: var(--color-gray-700); overflow: hidden; z-index: 1; }
.cs-hero-blur { position: absolute; margin: 0 !important; bottom: 0; flex-shrink: 0; width: 100%; height: 100%; top: 0; right: 0; left: 0; backdrop-filter: blur(4px); background-color: var(--color-gray-600); z-index: 2; }
.cs-hero-content { align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: var(--padding-80) var(--padding-0); gap: var(--gap-20); z-index: 3; flex-shrink: 0; text-align: left; font-size: var(--fs-16); color: var(--color-gray-300); font-family: var(--font-lilex); min-height: 320px; box-sizing: border-box; }
.cs-hero-badge-wrap { width: 320px; display: flex; flex-direction: column; align-items: flex-start; max-width: 320px; filter: blur(0); }
.cs-hero-badge { height: var(--height-32); filter: blur(0); border-radius: var(--br-4); background-color: var(--color-whitesmoke); display: flex; align-items: center; padding: var(--padding-4) var(--padding-8) var(--padding-4) var(--padding-6); box-sizing: border-box; gap: var(--gap-4); flex-shrink: 0; }
.cs-hero-badge-btn { cursor: pointer; border: 0; padding: var(--padding-01); background-color: transparent; height: var(--height-20); width: var(--width-20); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
.cs-hero-badge-icon { align-self: stretch; flex: 1; position: relative; max-width: 100%; overflow: hidden; max-height: 100%; }
.cs-hero-badge-text-wrap { display: flex; flex-direction: column; align-items: flex-start; }
.cs-hero-badge-text { position: relative; line-height: var(--lh-24); text-transform: uppercase; font-weight: 500; }
.cs-hero-title-wrap { display: flex; flex-direction: column; align-items: flex-start; padding: var(--padding-24) var(--padding-20) var(--padding-0) var(--padding-0); flex-shrink: 0; font-size: var(--fs-64); color: #0b0c0f; font-family: var(--font-stack-sans-text); }
.cs-hero-title { margin: 0; position: relative; font-size: inherit; letter-spacing: var(--ls--1_5); line-height: 76.8px; font-weight: 400; font-family: inherit; color: #0b0c0f; }
.cs-hero-sub-wrap { align-self: stretch; display: flex; flex-direction: column; align-items: flex-end; font-size: var(--fs-32); color: #0b0c0f; font-family: var(--font-inter); }
.cs-hero-sub-inner { width: 620px; filter: blur(0); display: flex; flex-direction: column; align-items: flex-start; }
.cs-hero-sub-text { align-self: stretch; position: relative; line-height: 51.2px; color: #0b0c0f; }
@media screen and (max-width: 1350px) { .cs-hero { padding-left: 60px; padding-right: 60px; box-sizing: border-box; } .cs-hero-sub-inner { display: none; } }
@media screen and (max-width: 925px) { .cs-hero { padding-left: 32px; padding-right: 32px; box-sizing: border-box; } .cs-hero-sub-inner { width: 0; } .cs-hero-sub-text { display: none; } }
@media screen and (max-width: 450px) { .cs-hero { padding-left: 16px; padding-right: 16px; padding-bottom: var(--padding-52); box-sizing: border-box; } .cs-hero-content { padding-top: var(--padding-52); box-sizing: border-box; } }

.cs-treatment { width: 1360px; display: flex; flex-direction: column; align-items: center; max-width: 100%; text-align: left; font-size: var(--fs-16); color: var(--color-gray-300); font-family: var(--font-lilex); }
.cs-treatment-top { align-self: stretch; display: flex; align-items: flex-start; gap: 170px; max-width: 100%; }
.cs-treatment-badge-col { align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; padding: var(--padding-12) var(--padding-0); }
.cs-treatment-badge { height: var(--height-32); filter: blur(0); border-radius: var(--br-4); background-color: var(--color-whitesmoke); display: flex; align-items: center; padding: var(--padding-4) var(--padding-8) var(--padding-4) var(--padding-6); box-sizing: border-box; gap: var(--gap-4); }
.cs-treatment-badge-btn { cursor: pointer; border: 0; padding: var(--padding-01); background-color: transparent; height: var(--height-20); width: var(--width-20); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
.cs-treatment-badge-icon { align-self: stretch; flex: 1; position: relative; max-width: 100%; overflow: hidden; max-height: 100%; }
.cs-treatment-badge-text-col { display: flex; flex-direction: column; align-items: flex-start; }
.cs-treatment-badge-text { position: relative; line-height: var(--lh-24); text-transform: uppercase; font-weight: 500; }
.cs-treatment-desc { align-self: stretch; width: var(--width-662); max-width: 662px; display: flex; flex-direction: column; align-items: flex-start; text-align: left; font-size: var(--fs-48); color: var(--color-gray-300); font-family: var(--font-stack-sans-text); }
.cs-treatment-desc-inner { align-self: stretch; height: 489.6px; filter: blur(0); display: flex; flex-direction: column; align-items: flex-start; padding: 153.6px var(--padding-0) var(--padding-0); box-sizing: border-box; gap: 24.2px; max-width: 100%; }
.cs-treatment-heading-wrap { margin-top: -154.2px; width: var(--width-662); flex-shrink: 0; display: flex; flex-direction: column; align-items: flex-start; max-width: 100%; }
.cs-treatment-heading { margin: 0; align-self: stretch; position: relative; font-size: inherit; letter-spacing: var(--ls--1_5); line-height: 64.8px; font-weight: 400; font-family: inherit; }
.cs-treatment-paragraphs { display: flex; flex-direction: column; align-items: flex-start; gap: var(--gap-16); flex-shrink: 0; font-size: var(--fs-20); font-family: var(--font-inter); max-width: 100%; }
.cs-treatment-p1 { width: var(--width-662); display: flex; flex-direction: column; align-items: flex-start; max-width: 100%; }
.cs-treatment-p-text { align-self: stretch; position: relative; line-height: var(--lh-32); }
.cs-bold { font-weight: 600; line-height: var(--lh-32); }
.cs-muted { font-weight: 500; color: var(--color-dimgray); }
.cs-treatment-p2 { width: var(--width-662); display: flex; flex-direction: column; align-items: flex-start; max-width: 100%; color: var(--color-dimgray); }
.cs-italic-normal { font-weight: 500; line-height: var(--lh-32); }
.cs-italic-bold { font-weight: 600; color: var(--color-gray-300); line-height: var(--lh-32); }
.cs-interventions { width: 1200px; display: flex; flex-direction: column; align-items: center; padding: var(--padding-80) var(--padding-0); box-sizing: border-box; max-width: 1200px; color: var(--color-dimgray); }
.cs-interventions-label { position: relative; line-height: var(--lh-24); text-transform: uppercase; }
.cs-interventions-cards-wrap { display: flex; flex-direction: column; align-items: flex-start; padding: 44px var(--padding-0) var(--padding-0); font-size: var(--fs-36); color: var(--color-gray-300); font-family: var(--font-stack-sans-text); }
.cs-interventions-grid { width: 1200px; height: 577.6px; border-radius: var(--br-16); background-color: var(--color-whitesmoke); display: grid; box-sizing: border-box; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); grid-template-rows: 577.593994140625px; row-gap: 0; }
.cs-interventions-card1 { border-right: 2px solid var(--color-gainsboro-100); display: flex; flex-direction: column; align-items: flex-start; padding: 34.9px var(--padding-36) var(--padding-36); gap: var(--gap-24); grid-column: 1; grid-row: 1; }
.cs-interventions-card-title { margin: 0; align-self: stretch; position: relative; font-size: inherit; letter-spacing: -1px; line-height: 46.8px; font-weight: 400; font-family: inherit; }
.cs-interventions-card2 { display: flex; flex-direction: column; align-items: flex-start; padding: 34.9px var(--padding-36) var(--padding-36); gap: var(--gap-24); grid-column: 2; grid-row: 1; text-align: left; font-size: var(--fs-36); color: var(--color-gray-300); font-family: var(--font-stack-sans-text); }
.cs-interventions-card2-heading { align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; padding: var(--padding-0) var(--padding-0) var(--padding-0_7); }
.cs-interventions-card2-title { margin: 0; width: 523px; position: relative; font-size: inherit; letter-spacing: -1px; line-height: 46.8px; font-weight: 400; font-family: inherit; display: flex; align-items: center; }
.cs-list-section { width: var(--width-670); filter: blur(0); display: flex; flex-direction: column; align-items: flex-start; gap: var(--gap-16); max-width: 100%; text-align: left; font-size: var(--fs-24); color: var(--color-gray-300); font-family: var(--font-inter); }
.cs-list-heading-wrap { align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; font-family: var(--font-stack-sans-text); }
.cs-list-heading { align-self: stretch; position: relative; line-height: var(--lh-36); font-weight: 500; }
.cs-list-items { align-self: stretch; height: 266.4px; overflow: hidden; display: flex; flex-direction: column; align-items: flex-start; padding: 68.5px var(--padding-0) var(--padding-0); gap: 10.9px; max-width: 100%; font-size: var(--fs-18); box-sizing: border-box; flex-shrink: 0; }
.cs-list-item-first { margin-top: -69.6px; width: var(--width-670); display: flex; flex-direction: column; align-items: flex-start; padding: var(--padding-0) var(--padding-0) var(--padding-0_7) var(--padding-36); position: relative; isolation: isolate; max-width: 100%; box-sizing: border-box; flex-shrink: 0; }
.cs-list-item-icon-wrap { width: 100%; height: 100%; margin: 0 !important; position: absolute; top: 1.1px; right: 0; bottom: 0; left: 0; overflow: hidden; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: var(--padding-18_8) var(--padding-0); z-index: 0; box-sizing: border-box; }
.cs-list-item-icon { width: var(--width-20); height: var(--height-20); position: relative; }
.cs-list-item-text { align-self: stretch; position: relative; line-height: var(--lh-28_8); z-index: 1; flex-shrink: 0; }
.cs-list-item-label { font-weight: 600; line-height: var(--lh-28_8); }
.cs-list-item-desc { line-height: var(--lh-28_8); }
.cs-list-item { width: var(--width-670); display: flex; flex-direction: column; align-items: flex-start; padding: var(--padding-0) var(--padding-0) var(--padding-0_7) var(--padding-36); box-sizing: border-box; position: relative; isolation: isolate; max-width: 100%; flex-shrink: 0; }
.cs-list-note { align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; font-size: var(--fs-20); }
.cs-list-note-text { align-self: stretch; position: relative; line-height: var(--lh-32); }
@media screen and (max-width: 1350px) { .cs-treatment-top { gap: 85px; flex-wrap: wrap; } .cs-interventions { max-width: 100%; } }
@media screen and (max-width: 925px) { .cs-treatment-top { gap: 42px; } .cs-treatment-desc { max-width: 100%; } .cs-treatment-desc-inner { padding-top: var(--padding-100); box-sizing: border-box; } .cs-treatment-heading { font-size: 38px; line-height: 52px; } .cs-interventions { padding-top: var(--padding-52); padding-bottom: var(--padding-52); box-sizing: border-box; } .cs-interventions-cards-wrap { padding-top: 29px; box-sizing: border-box; } .cs-interventions-card-title, .cs-interventions-card2-title { font-size: var(--fs-29); line-height: 37px; } }
@media screen and (max-width: 450px) { .cs-treatment-top { gap: 21px; } .cs-treatment-heading { font-size: var(--fs-29); line-height: 39px; } .cs-treatment-p-text { font-size: var(--fs-16); line-height: var(--lh-26); } .cs-interventions { padding-top: 34px; padding-bottom: 34px; box-sizing: border-box; } .cs-interventions-card-title, .cs-interventions-card2-title { font-size: var(--fs-22); line-height: var(--lh-28); } .cs-list-heading { font-size: var(--fs-19); line-height: 29px; } }

.cs-svc-card { width: 526px; height: var(--height-250); position: relative; text-align: left; font-size: var(--fs-16); color: var(--color-gray-300); font-family: var(--font-lilex); margin-top: auto; }
.cs-svc-badge { position: absolute; bottom: 0; left: 0; filter: blur(0); border-radius: var(--br-4); background-color: var(--color-gray-500); display: flex; align-items: center; padding: var(--padding-4) var(--padding-8) var(--padding-4) var(--padding-6); gap: var(--gap-4); flex-shrink: 0; }
.cs-svc-badge-check { margin: 0; height: var(--height-20); width: var(--width-20); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
.cs-svc-badge-label-col { display: flex; flex-direction: column; align-items: flex-start; }
.cs-svc-badge-label { position: relative; line-height: var(--lh-24); text-transform: uppercase; font-weight: 500; }
.cs-svc-img { position: absolute; bottom: 2.5px; left: 316px; border-radius: var(--br-8); width: var(--width-220); height: var(--height-275); object-fit: cover; object-position: center 16%; flex-shrink: 0; }
.cs-neurology-svc-img {
  width: 270px;
  height: 390px;
  left: auto;
  right: 0;
  bottom: 2.5px;
  object-fit: contain;
  object-position: center bottom;
  background-color: #e9ebeb;
}

.cs-stat-card { align-self: stretch; height: 1200px; display: flex; align-items: center; justify-content: center; position: relative; isolation: isolate; z-index: 0; }
.cs-stat-bg { align-self: stretch; flex: 1; position: relative; max-width: 100%; overflow: hidden; max-height: 100%; object-fit: cover; z-index: 0; }
.cs-stat-overlay { width: 640px; height: 360px; margin: 0 !important; position: absolute; top: 24px; left: 52px; right: auto; transform: none; backdrop-filter: blur(12px); border-radius: var(--br-16); background-color: rgba(92, 104, 120, 0.42); border: 1px solid rgba(255,255,255,0.18); box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 18px 32px 20px; max-width: 640px; z-index: 2; text-align: center; font-size: var(--fs-100); color: var(--color-white); font-family: var(--font-stack-sans-text); }
.cs-stat-card-label { align-self: flex-start; width: 100%; margin-bottom: 14px; position: relative; font-size: 28px; line-height: 1.1; letter-spacing: 0.04em; text-transform: uppercase; text-align: left; font-weight: 700; color: rgba(255,255,255,0.96); font-family: var(--font-lilex); }
.cs-stat-number-wrap { display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; }
.cs-stat-number { margin: 0; position: relative; font-size: inherit; line-height: 120px; font-weight: 400; font-family: inherit; text-align: center; }
.cs-stat-divider-wrap { align-self: stretch; height: 48px; display: flex; flex-direction: column; align-items: center; padding: 18px var(--padding-0); box-sizing: border-box; }
.cs-stat-divider { align-self: stretch; height: var(--height-2); position: relative; border: 1px solid rgba(255,255,255,0.22); }
.cs-stat-text { display: flex; flex-direction: column; align-items: center; text-align: center; font-size: var(--fs-32); font-family: var(--font-inter); width: 100%; }
.cs-stat-title { margin: 0; position: relative; font-size: inherit; line-height: 51.2px; font-weight: 400; font-family: inherit; text-align: center; }
.cs-stat-desc-wrap { width: 100%; display: flex; flex-direction: column; align-items: center; padding: var(--padding-12) var(--padding-0) var(--padding-0); box-sizing: border-box; margin-top: -0.4px; position: relative; font-size: var(--fs-16); color: var(--color-whitesmoke); }
.cs-stat-desc-inner { align-self: stretch; display: flex; flex-direction: column; align-items: center; padding: var(--padding-0) var(--padding-14); }
.cs-stat-desc { align-self: stretch; position: relative; line-height: var(--lh-24); text-align: center; }
@media screen and (max-width: 925px) {
  .cs-stat-card {
    height: auto !important;
    min-height: 380px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
    padding: 0 24px;
    box-sizing: border-box;
    border-radius: 20px;
    overflow: hidden !important;
  }
  .cs-stat-bg {
    position: absolute !important;
    inset: 0 !important;
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    min-height: 100% !important;
    object-fit: cover !important;
    object-position: center center !important;
    border-radius: 20px !important;
    z-index: 0 !important;
  }
  .cs-stat-overlay {
    position: absolute !important;
    inset: 0 !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    height: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    transform: none !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    background-color: rgba(15, 23, 42, 0.55) !important;
    border: 1px solid rgba(255, 255, 255, 0.18) !important;
    border-radius: 20px !important;
    box-sizing: border-box !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 24px 20px !important;
    z-index: 2 !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
  .cs-stat-card-label {
    display: none !important;
  }
  .cs-stat-number { font-size: 44px !important; line-height: 50px !important; text-align: center !important; color: #ffffff !important; margin: 0 !important; }
  .cs-stat-title { font-size: 20px !important; line-height: 26px !important; text-align: center !important; color: #ffffff !important; margin: 0 !important; font-weight: 500 !important; }
  .cs-stat-desc { font-size: 13px !important; line-height: 19px !important; text-align: center !important; color: rgba(255, 255, 255, 0.88) !important; }
}
@media screen and (max-width: 450px) {
  .cs-stat-card {
    width: 100% !important;
    max-width: 100% !important;
    min-height: 320px !important;
    box-sizing: border-box;
    padding: 0 16px;
  }
  .cs-stat-bg {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    height: 100% !important;
    min-height: 100% !important;
    object-position: center center !important;
  }
  .cs-stat-overlay {
    padding: 18px 16px !important;
  }
  .cs-stat-card-label {
    display: none !important;
  }
  .cs-stat-number {
    font-size: 36px !important;
    line-height: 42px !important;
  }
  .cs-stat-divider-wrap {
    height: 24px !important;
    padding: 8px 0 !important;
  }
  .cs-stat-title {
    font-size: 18px !important;
    line-height: 24px !important;
  }
  .cs-stat-desc {
    font-size: 12px !important;
    line-height: 17px !important;
  }
  .cs-hero-bg { height: 300px !important; object-position: center 58% !important; }

}

.cs-contact-info { align-self: stretch; width: 548px; display: flex; flex-direction: column; align-items: flex-start; padding: var(--padding-12) var(--padding-0) 309px; box-sizing: border-box; gap: 22.9px; max-width: 548px; text-align: left; font-size: var(--fs-16); color: var(--color-gray-300); font-family: var(--font-lilex); }
.cs-contact-info-badge { filter: blur(0); border-radius: var(--br-4); background-color: var(--color-whitesmoke); display: flex; align-items: center; padding: var(--padding-4) var(--padding-8) var(--padding-4) var(--padding-6); gap: var(--gap-4); }
.cs-contact-info-badge-btn { cursor: pointer; border: 0; padding: var(--padding-01); background-color: transparent; height: var(--height-20); width: var(--width-20); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
.cs-contact-info-badge-icon { align-self: stretch; flex: 1; position: relative; max-width: 100%; overflow: hidden; max-height: 100%; }
.cs-contact-info-badge-text-col { display: flex; flex-direction: column; align-items: flex-start; }
.cs-contact-info-badge-text { position: relative; line-height: var(--lh-24); text-transform: uppercase; font-weight: 500; }
.cs-contact-info-title-wrap { align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; padding: var(--padding-0) var(--padding-0) var(--padding-0_7); font-size: var(--fs-64); font-family: var(--font-stack-sans-text); }
.cs-contact-info-title { margin: 0; align-self: stretch; position: relative; font-size: inherit; letter-spacing: var(--ls--1_5); line-height: 76.8px; font-weight: 400; font-family: inherit; }
.cs-contact-info-desc-wrap { align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; padding: 19.9px var(--padding-0) 0.6px; font-size: var(--fs-18); color: var(--color-dimgray); font-family: var(--font-inter); }
.cs-contact-info-desc { align-self: stretch; position: relative; line-height: var(--lh-28_8); }
@media screen and (max-width: 925px) { .cs-contact-info { padding-top: var(--padding-20); padding-bottom: 201px; box-sizing: border-box; max-width: 100%; } .cs-contact-info-title { font-size: 51px; line-height: 61px; } }
@media screen and (max-width: 450px) { .cs-contact-info-title { font-size: 38px; line-height: 46px; } }

.cs-form { align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; gap: var(--gap-32); text-align: left; font-size: var(--fs-16); color: var(--color-gray-200); font-family: var(--font-lilex); }
.cs-form-row { align-self: stretch; display: flex; align-items: flex-start; filter: blur(0); flex-wrap: wrap; align-content: flex-start; gap: var(--gap-16); justify-content: center; }
.cs-form-row-single { align-self: stretch; display: flex; align-items: flex-start; filter: blur(0); justify-content: center; }
.cs-form-textarea-wrap { align-self: stretch; display: flex; align-items: flex-start; filter: blur(0); justify-content: center; font-family: var(--font-inter); }
.cs-form-textarea-inner { flex: 1; display: flex; flex-direction: column; align-items: flex-start; gap: var(--gap-12); max-width: 100%; }
.cs-form-textarea-label-wrap { padding: var(--padding-0) var(--padding-0) var(--padding-5); align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; font-family: var(--font-lilex); }
.cs-form-textarea-label { align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; }
.cs-form-textarea-label-text { align-self: stretch; position: relative; line-height: var(--lh-24); text-transform: uppercase; font-weight: 500; }
.cs-form-textarea-el { align-self: stretch; height: 195px; border-radius: var(--br-12); background-color: var(--color-whitesmoke); border: var(--border-1); box-sizing: border-box; overflow: auto; flex-shrink: 0; display: flex; flex-direction: column; align-items: flex-start; padding: var(--padding-12); color: var(--color-gray-100); }
.cs-form-textarea-placeholder { align-self: stretch; position: relative; line-height: var(--lh-24); }
.cs-form-note-wrap { align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; font-size: var(--fs-14); color: var(--color-gray-300); }
.cs-form-note { align-self: stretch; position: relative; line-height: var(--lh-24); }
.cs-form-submit-row { align-self: stretch; display: flex; align-items: center; padding: var(--padding-4) var(--padding-0) var(--padding-0); }
.cs-form-submit-btn { cursor: pointer; border: 0; padding: var(--padding-12) var(--padding-20); background-color: var(--color-gray-200); border-radius: var(--br-8); overflow: hidden; display: flex; flex-direction: column; align-items: center; }
.cs-form-submit-btn:hover { background-color: var(--color-slategray); }
.cs-form-submit-text { position: relative; font-size: var(--fs-16); line-height: var(--lh-24); font-family: var(--font-lilex); color: var(--color-white); text-align: center; }
.cs-input-field { flex: 1; display: flex; flex-direction: column; align-items: flex-start; gap: var(--gap-12); min-width: var(--min-w-226); text-align: left; font-size: var(--fs-16); color: var(--color-gray-200); font-family: var(--font-lilex); }
.cs-input-label-wrap { padding: var(--padding-0) var(--padding-0) var(--padding-5); align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; }
.cs-input-label-inner { align-self: stretch; display: flex; flex-direction: column; align-items: flex-start; }
.cs-input-label-text { align-self: stretch; position: relative; text-transform: uppercase; font-weight: 500; }
.cs-input-label-name { line-height: var(--lh-24); }
.cs-input-label-star { line-height: var(--lh-24); color: var(--color-lightslategray); }
.cs-input-box { align-self: stretch; height: var(--height-50); border-radius: var(--br-12); background-color: var(--color-whitesmoke); border: var(--border-1); box-sizing: border-box; overflow: hidden; flex-shrink: 0; display: flex; flex-direction: column; align-items: flex-start; padding: var(--padding-14) var(--padding-12); }
.cs-input-el { width: 100%; border: 0; outline: 0; background-color: transparent; height: var(--height-19); font-family: var(--font-inter); font-size: var(--fs-16); color: var(--color-gray-100); min-width: var(--min-w-193); }
@media screen and (max-width: 925px) { .cs-form { gap: var(--gap-16); } }

.cs-appointment-btn {
  align-self: flex-start;
  cursor: pointer;
  border: 0;
  padding: 12px 24px;
  background-color: var(--color-gray-200);
  border-radius: 8px;
  color: var(--color-white);
  font-family: var(--font-lilex);
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  transition: background-color 0.2s ease;
  margin-top: 24px;
}
.cs-appointment-btn:hover {
  background-color: var(--color-slategray);
}

/* Custom Responsive Overrides for Mobile and Tablet Views */
@media screen and (max-width: 1350px) {
  .cs-hero {
    padding-left: 48px;
    padding-right: 48px;
    box-sizing: border-box;
  }
  .cs-hero-sub-wrap {
    align-items: flex-start;
  }
  .cs-hero-sub-inner {
    display: flex !important;
    width: 100%;
    max-width: 100%;
  }
  .cs-hero-sub-text {
    display: block !important;
  }
  .cs-treatment-top {
    gap: 32px;
    flex-direction: column;
  }
  .cs-treatment-desc {
    max-width: 100%;
    width: 100%;
  }
  .cs-treatment-desc-inner {
    height: auto;
    padding-top: 0;
  }
  .cs-treatment-heading-wrap {
    margin-top: 0;
    width: 100%;
  }
  .cs-contact-section {
    width: 100%;
    max-width: 100%;
    padding-left: 48px;
    padding-right: 48px;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 925px) {
  .cs-hero {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 16px !important;
    padding-bottom: 16px !important;
    padding-left: 24px !important;
    padding-right: 24px !important;
    min-height: auto !important;
    box-sizing: border-box;
  }
  .cs-hero-bg {
    position: relative !important;
    width: 100% !important;
    height: 320px !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    order: 2;
    border-radius: 18px;
    object-fit: cover;
    object-position: center 58%;
    z-index: 0;
  }
  .cs-hero-content {
    order: 1;
    width: 100%;
    padding-top: 8px !important;
    padding-bottom: 0 !important;
    min-height: auto !important;
    gap: 12px;
    z-index: 1;
  }
  .cs-hero-badge-wrap {
    width: 100%;
    max-width: 100%;
  }
  .cs-hero-sub-wrap {
    align-items: flex-start;
  }
  .cs-hero-sub-inner {
    display: flex !important;
    width: 100%;
    max-width: 100%;
  }
  .cs-hero-sub-text {
    display: block !important;
  }
  
  .cs-treatment-top {
    gap: 24px;
    flex-direction: column;
    padding-left: 24px;
    padding-right: 24px;
    box-sizing: border-box;
  }
  .cs-treatment-desc {
    max-width: 100%;
    width: 100%;
  }
  .cs-treatment-desc-inner {
    height: auto;
    padding-top: 0;
  }
  .cs-treatment-heading-wrap {
    margin-top: 0;
    width: 100%;
  }
  .cs-treatment-p1, .cs-treatment-p2 {
    width: 100% !important;
    max-width: 100% !important;
  }
  .cs-interventions-card-title, .cs-interventions-card2-title {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
  
  .cs-interventions {
    width: 100%;
    max-width: 100%;
    padding: 40px 24px;
  }
  .cs-interventions-grid {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: transparent;
  }
  .cs-interventions-card1, .cs-interventions-card2 {
    width: 100%;
    height: auto;
    grid-column: unset;
    grid-row: unset;
    padding: 32px 24px;
    border: none;
    background-color: var(--color-whitesmoke);
    border-radius: 16px;
    gap: 24px !important;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  .cs-svc-card {
    width: 100% !important;
    height: auto !important;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: static;
  }
  .cs-svc-badge {
    position: static;
    align-self: flex-start;
  }
  .cs-svc-img {
    position: static;
    width: 100% !important;
    height: auto !important;
    aspect-ratio: 0.82;
    border-radius: 12px;
    object-fit: cover;
    object-position: center center;
    background-color: #f2f4f5;
  }
  .cs-neurology-svc-img {
    width: 100% !important;
    height: 390px !important;
    max-height: 65vw;
    object-fit: contain !important;
    object-position: center center !important;
  }
  
  .cs-list-section {
    width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
  }
  .cs-list-items {
    height: auto;
    overflow: visible;
    padding-top: 0;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .cs-list-item-first, .cs-list-item {
    margin-top: 0 !important;
    width: 100% !important;
    padding-left: 36px !important;
  }
  
  .cs-stat-card {
    height: auto !important;
    min-height: 380px !important;
    position: relative !important;
    overflow: hidden !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    border-radius: 20px !important;
  }
  .cs-stat-bg {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    display: block !important;
    object-fit: cover !important;
    object-position: center center !important;
    border-radius: 20px !important;
    z-index: 0 !important;
  }
  .cs-stat-overlay {
    position: absolute !important;
    inset: 0 !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    height: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    transform: none !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    background-color: rgba(15, 23, 42, 0.55) !important;
    border: 1px solid rgba(255, 255, 255, 0.18) !important;
    border-radius: 20px !important;
    box-sizing: border-box !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 24px 20px !important;
    z-index: 2 !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
  .cs-stat-number-wrap, .cs-stat-text {
    width: 100% !important;
    max-width: 100% !important;
  }
  .cs-stat-desc-wrap {
    width: 100% !important;
    max-width: 100% !important;
  }
  
  .cs-contact-section {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 60px 24px;
    box-sizing: border-box;
    position: relative;
    z-index: 0;
    margin-top: 80px;
  }
  .cs-contact-info {
    width: 100%;
    max-width: 100%;
    padding-bottom: 0;
    position: relative;
    z-index: 0;
    margin-top: 0;
  }
  .cs-form-wrap {
    width: 100%;
    max-width: 100%;
    padding-top: 0;
    position: relative;
    z-index: 0;
    margin-top: 0;
  }
}

@media screen and (max-width: 450px) {
  .cs-hero {
    padding: 12px 16px 12px 16px !important;
    min-height: auto !important;
    box-sizing: border-box;
  }
  .cs-hero-content {
    padding-top: 4px !important;
    padding-bottom: 0 !important;
    min-height: auto !important;
    box-sizing: border-box;
  }
  .cs-hero-title-wrap {
    padding-top: 4px !important;
    padding-bottom: 0 !important;
  }
  .cs-hero-title {
    font-size: 32px !important;
    line-height: 40px !important;
  }
  .cs-hero-sub-text {
    font-size: 16px !important;
    line-height: 24px !important;
  }
  
  .cs-hero-badge-wrap {
    max-width: 100% !important;
    width: auto !important;
  }
  .cs-treatment-top {
    gap: 16px;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
  }
  .cs-treatment-desc {
    max-width: 100%;
    width: 100%;
  }
  .cs-treatment-desc-inner {
    height: auto;
    padding-top: 0;
    gap: 16px;
  }
  .cs-treatment-heading {
    font-size: 28px !important;
    line-height: 36px !important;
  }
  .cs-treatment-paragraphs {
    gap: 12px;
  }
  .cs-treatment-p-text {
    font-size: 15px !important;
    line-height: 22px !important;
  }
  
  .cs-interventions {
    width: 100%;
    max-width: 100%;
    padding: 32px 16px;
  }
  .cs-interventions-card1, .cs-interventions-card2 {
    padding: 24px 16px;
    border-radius: 12px;
    gap: 16px !important;
  }
  .cs-interventions-card-title, .cs-interventions-card2-title {
    font-size: 20px !important;
    line-height: 28px !important;
  }
  .cs-svc-card {
    gap: 12px;
  }
  .cs-svc-img {
    width: 100% !important;
    height: 320px !important;
    aspect-ratio: auto;
    object-fit: contain;
    object-position: center center;
    border-radius: 8px;
    background-color: #f2f4f5;
  }
  .cs-neurology-svc-img {
    width: 100% !important;
    height: 320px !important;
    max-height: none;
    object-fit: contain !important;
    object-position: center center !important;
  }
  
  .cs-list-section {
    padding: 0 16px;
  }
  .cs-list-heading {
    font-size: 18px !important;
    line-height: 26px !important;
  }
  .cs-list-items {
    margin-top: 12px;
    gap: 12px;
  }
  .cs-list-item-first, .cs-list-item {
    padding-left: 32px !important;
  }
  .cs-list-item-text {
    font-size: 14px !important;
    line-height: 20px !important;
  }
  
  .cs-stat-card {
    height: auto !important;
    min-height: 340px !important;
    position: relative !important;
    overflow: hidden !important;
    display: flex !important;
    border-radius: 20px !important;
  }
  .cs-stat-overlay {
    position: absolute !important;
    inset: 0 !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    height: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    transform: none !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    background-color: rgba(15, 23, 42, 0.55) !important;
    border: 1px solid rgba(255, 255, 255, 0.18) !important;
    border-radius: 20px !important;
    box-sizing: border-box !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 20px 16px !important;
    z-index: 2 !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
  .cs-stat-number {
    font-size: 36px !important;
    line-height: 44px !important;
  }
  .cs-stat-divider-wrap {
    height: 24px;
    padding: 8px 0;
  }
  .cs-stat-title {
    font-size: 18px !important;
    line-height: 24px !important;
  }
  .cs-stat-desc {
    font-size: 12px !important;
    line-height: 18px !important;
  }
  
  .cs-contact-section {
    padding: 40px 16px;
    gap: 32px;
    margin-top: 64px;
  }
  .cs-contact-info {
    padding-bottom: 0 !important;
    margin-top: 0 !important;
  }
  .cs-contact-info-title {
    font-size: 34px !important;
    line-height: 42px !important;
  }
  .cs-form-wrap {
    margin-top: 0 !important;
  }
}
`;
// END_STYLES

function useInjectStyles() {
    useEffect(() => {
        const id = "cardiology-section-styles";
        if (document.getElementById(id)) return;
        const el = document.createElement("style");
        el.id = id;
        el.textContent = CARDIOLOGY_STYLES;
        document.head.appendChild(el);
        return () => {
            el.remove();
        };
    }, []);
}

// InputField (was Container2)
type InputFieldProps = {
    label?: string;
    placeholder?: string;
    minWidth?: string;
    filter?: string;
    labelColor?: string;
    inputMinWidth?: string;
};
const InputField: FunctionComponent<InputFieldProps> = ({
    label,
    placeholder,
    minWidth,
    filter,
    labelColor,
    inputMinWidth,
}) => {
    const fieldStyle: CSSProperties = useMemo(
        () => ({ minWidth, filter }),
        [minWidth, filter]
    );
    const labelStyle: CSSProperties = useMemo(
        () => ({ color: labelColor }),
        [labelColor]
    );
    const inputStyle: CSSProperties = useMemo(
        () => ({ minWidth: inputMinWidth }),
        [inputMinWidth]
    );
    return (
        <div className="cs-input-field" style={fieldStyle}>
            <div className="cs-input-label-wrap">
                <div className="cs-input-label-inner">
                    <div className="cs-input-label-text" style={labelStyle}>
                        <span className="cs-input-label-name">{label || "Full Name"}</span>
                        <span className="cs-input-label-star">*</span>
                    </div>
                </div>
            </div>
            <div className="cs-input-box">
                <input
                    className="cs-input-el"
                    placeholder={placeholder}
                    type="text"
                    style={inputStyle}
                />
            </div>
        </div>
    );
};

// ServiceDetail (was Container1)
type ServiceDetailProps = {
    label?: string;
    imageSrc?: string;
    width?: CSSProperties["width"];
    alignSelf?: CSSProperties["alignSelf"];
};
const ServiceDetail: FunctionComponent<ServiceDetailProps> = ({
    label,
    imageSrc,
    width,
    alignSelf,
}) => {
    const style: CSSProperties = useMemo(
        () => ({ width, alignSelf }),
        [width, alignSelf]
    );
    return (
        <div className="cs-svc-card" style={style}>
            <div className="cs-svc-badge">
                <button className="cs-treatment-badge-btn">
                    <img
                        className="cs-treatment-badge-icon"
                        loading="lazy"
                        alt=""
                        src="/SVG.svg"
                    />
                </button>
                <div className="cs-svc-badge-label-col">
                    <div className="cs-svc-badge-label">{label}</div>
                </div>
            </div>
            <img
                className={`cs-svc-img${imageSrc?.startsWith("/Neurology-") ? " cs-neurology-svc-img" : ""}`}
                loading="lazy"
                alt=""
                src={imageSrc}
            />
        </div>
    );
};

// HeroSection (was Section)
const HeroSection: FunctionComponent<{ data: SpecialtyData; specialtyId?: string }> = ({ data, specialtyId }) => {
    const heroImage = specialtyId === "general-surgery"
        ? "/General-Surgery-Top-Image.png"
        : specialtyId === "general-medicine"
            ? "/General-Medicine-Top-Image.png"
        : specialtyId === "gastroenterology"
            ? "/Gastroenterology-Top-Image.png"
        : specialtyId === "dental-maxillofacial-surgery"
            ? "/Dental-Maxillofacial-Surgery-Top-Image.png"
        : specialtyId === "ophthalmology"
            ? "/Ophthalmology-Top-Image.png"
        : specialtyId === "neurology"
            ? "/Neurology-Top-Image.png"
        : specialtyId === "minimal-access-laparoscopic-surgery"
            ? "/Minimal-Access-Laparoscopic-Surgery-Top-Image.png"
        : specialtyId === "paediatrics-neonatology"
            ? "/Paediatrics-Neonatology-Top-Image.png"
        : specialtyId === "obstetrics-gynaecology"
            ? "/Obstetrics-Gynaecology-Top-Image.png"
        : specialtyId === "orthopaedics-joint-replacement"
            ? "/Orthopaedics-Joint-Replacement-Top-Image.png"
        : specialtyId === "urology"
            ? "/Urology-Top-Image.png"
            : "/Overlay+OverlayBlur.png";

    return (
        <header className="cs-hero">
            <img className="cs-hero-bg" alt="" src={heroImage} />
            {/* <div className="cs-hero-paint" />
            <div className="cs-hero-blur" /> */}
            <section className="cs-hero-content">
                <div className="cs-hero-badge-wrap">
                    <div className="cs-hero-badge">
                        <button className="cs-hero-badge-btn">
                            <img
                                className="cs-hero-badge-icon"
                                loading="lazy"
                                alt=""
                                src="/SVG.svg"
                            />
                        </button>
                        <div className="cs-hero-badge-text-wrap">
                            <div className="cs-hero-badge-text">SPECIALITIES</div>
                        </div>
                    </div>
                    <div className="cs-hero-title-wrap">
                        <h2 className="cs-hero-title">{data.name}</h2>
                    </div>
                </div>
            </section>
        </header>
    );
};

// TreatmentSection (was Container3)
const TreatmentSection: FunctionComponent<{ data: SpecialtyData; specialtyId?: string }> = ({ data, specialtyId }) => {
    return (
        <section className="cs-treatment">
            <div className="cs-treatment-top">
                <div className="cs-treatment-badge-col">
                    <div className="cs-treatment-badge">
                        <button className="cs-treatment-badge-btn">
                            <img
                                className="cs-treatment-badge-icon"
                                loading="lazy"
                                alt=""
                                src="/SVG.svg"
                            />
                        </button>
                        <div className="cs-treatment-badge-text-col">
                            <div className="cs-treatment-badge-text">TREATMENT SCOPE</div>
                        </div>
                    </div>
                </div>
                <section className="cs-treatment-desc">
                    <div className="cs-treatment-desc-inner">
                        <div className="cs-treatment-heading-wrap">
                            <h1 className="cs-treatment-heading">
                                Protecting your health through precision care.
                            </h1>
                        </div>
                        <div className="cs-treatment-paragraphs">
                            <div className="cs-treatment-p1">
                                <div className="cs-treatment-p-text">
                                    <span className="cs-bold">{data.boldIntro}</span>
                                    <span className="cs-muted">
                                        {" "}
                                        {data.mutedIntro}
                                    </span>
                                </div>
                            </div>
                            <div className="cs-treatment-p2">
                                <div className="cs-treatment-p-text">
                                    <span className="cs-italic-normal">{`Every patient begins with a `}</span>
                                    <span className="cs-italic-bold">
                                        comprehensive evaluation
                                    </span>
                                    <span className="cs-italic-normal">
                                        . This includes a detailed review of your history, a physical
                                        examination, and a personalised diagnostic plan tailored to
                                        your specific condition and risk factors.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="cs-interventions">
                <div className="cs-treatment-badge-text-col">
                    <div className="cs-interventions-label">KEY INTERVENTIONS</div>
                </div>
                <div className="cs-interventions-cards-wrap">
                    <div className="cs-interventions-grid">
                        <div className="cs-interventions-card1">
                            <h1 className="cs-interventions-card-title">{data.intervention1Title}</h1>
                            <ServiceDetail
                                label={data.intervention1Label}
                                imageSrc={
                                    specialtyId === "general-surgery"
                                        ? "/General-Surgery-Diagnostic-Accuracy.png"
                                        : specialtyId === "general-medicine"
                                            ? "/General-Medicine-Diagnostic-Accuracy.png"
                                        : specialtyId === "gastroenterology"
                                            ? "/Gastroenterology-Diagnostic-Accuracy.png"
                                        : specialtyId === "dental-maxillofacial-surgery"
                                            ? "/Dental-Maxillofacial-Surgery-Diagnostic-Accuracy.png"
                                        : specialtyId === "ophthalmology"
                                            ? "/Ophthalmology-Diagnostic-Accuracy.png"
                                        : specialtyId === "neurology"
                                            ? "/Neurology-Diagnostic-Accuracy.png"
                                        : specialtyId === "minimal-access-laparoscopic-surgery"
                                            ? "/Minimal-Access-Laparoscopic-Surgery-Diagnostic-Accuracy.png"
                                        : specialtyId === "paediatrics-neonatology"
                                            ? "/Paediatrics-Neonatology-Diagnostic-Accuracy.png"
                                        : specialtyId === "obstetrics-gynaecology"
                                            ? "/Obstetrics-Gynaecology-Diagnostic-Accuracy.png"
                                        : specialtyId === "orthopaedics-joint-replacement"
                                            ? "/Orthopaedics-Joint-Replacement-Diagnostic-Accuracy.jpg"
                                        : specialtyId === "urology"
                                            ? "/Urology-Diagnostic-Accuracy.jpg"
                                        : "/69a3e99bd6ca614dc6e9e9aa-Service-20Details-20Image-2001-webp@2x.png"
                                }
                            />
                        </div>
                        <section className="cs-interventions-card2">
                            <div className="cs-interventions-card2-heading">
                                <h1 className="cs-interventions-card2-title">{data.intervention2Title}</h1>
                            </div>
                            <ServiceDetail
                                label={data.intervention2Label}
                                imageSrc={
                                    specialtyId === "general-surgery"
                                        ? "/General-Surgery-Therapeutic-Strategy.png"
                                        : specialtyId === "general-medicine"
                                            ? "/General-Medicine-Therapeutic-Strategy.png"
                                        : specialtyId === "gastroenterology"
                                            ? "/Gastroenterology-Therapeutic-Strategy.png"
                                        : specialtyId === "dental-maxillofacial-surgery"
                                            ? "/Dental-Maxillofacial-Surgery-Therapeutic-Strategy.png"
                                        : specialtyId === "ophthalmology"
                                            ? "/Ophthalmology-Therapeutic-Strategy.png"
                                        : specialtyId === "neurology"
                                            ? "/Neurology-Therapeutic-Strategy.png"
                                        : specialtyId === "minimal-access-laparoscopic-surgery"
                                            ? "/Minimal-Access-Laparoscopic-Surgery-Therapeutic-Strategy.png"
                                        : specialtyId === "paediatrics-neonatology"
                                            ? "/Paediatrics-Neonatology-Therapeutic-Strategy.png"
                                        : specialtyId === "obstetrics-gynaecology"
                                            ? "/Obstetrics-Gynaecology-Therapeutic-Strategy.png"
                                        : specialtyId === "orthopaedics-joint-replacement"
                                            ? "/Orthopaedics-Joint-Replacement-Therapeutic-Strategy.jpg"
                                        : specialtyId === "urology"
                                            ? "/Urology-Therapeutic-Strategy.jpg"
                                        : "/69a3e99bfd7ca35f82f15373-Service-20Details-20Image-2002-webp@2x.png"
                                }
                                width="unset"
                                alignSelf="stretch"
                            />
                        </section>
                    </div>
                </div>
            </div>
            <section className="cs-list-section">
                <div className="cs-list-heading-wrap">
                    <div className="cs-list-heading">
                        {data.listHeading}
                    </div>
                </div>
                <div className="cs-list-items">
                    {data.listItems.map((item, i) => (
                        <div
                            key={i}
                            className={i === 0 ? "cs-list-item-first" : "cs-list-item"}
                        >
                            <div className="cs-list-item-icon-wrap">
                                <img
                                    className="cs-list-item-icon"
                                    loading="lazy"
                                    alt=""
                                    src="/699b66f163c738c08a92d0be-Pricing-20List-20icon-svg.svg"
                                />
                            </div>
                            <div className="cs-list-item-text">
                                <span className="cs-list-item-label">{item.label}</span>
                                <span className="cs-list-item-desc">{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cs-list-note">
                    <div className="cs-list-note-text">
                        <span className="cs-bold">{data.noteBold}</span>
                        <span className="cs-muted">
                            {" "}
                            {data.noteMuted}
                        </span>
                    </div>
                </div>
            </section>
        </section>
    );
};

// StatCard (was Container5)
const StatCard: FunctionComponent<{ data: SpecialtyData; specialtyId?: string }> = ({ data, specialtyId }) => (
    <section className="cs-stat-card">
        <img
            className="cs-stat-bg"
            loading="lazy"
            alt=""
           src={
               specialtyId === "general-surgery"
                   ? "/General-Surgery-Below-Section.png"
                   : specialtyId === "general-medicine"
                       ? "/General-Medicine-Below-Section.png"
                   : specialtyId === "gastroenterology"
                       ? "/Gastroenterology-Below-Section.png"
                   : specialtyId === "dental-maxillofacial-surgery"
                       ? "/Dental-Maxillofacial-Surgery-Below-Section.png"
                   : specialtyId === "ophthalmology"
                       ? "/Ophthalmology-Below-Section.png"
                   : specialtyId === "minimal-access-laparoscopic-surgery"
                       ? "/Minimal-Access-Laparoscopic-Surgery-Below-Section.png"
                   : specialtyId === "paediatrics-neonatology"
                       ? "/Paediatrics-Neonatology-Below-Section.png"
                   : specialtyId === "obstetrics-gynaecology"
                       ? "/Obstetrics-Gynaecology-Below-Section.png"
                   : specialtyId === "orthopaedics-joint-replacement"
                       ? "/Orthopaedics-Joint-Replacement-Below-Section.jpg"
                   : specialtyId === "neurology"
                       ? "/Neurology-Below-Section.jpg"
                   : specialtyId === "urology"
                       ? "/Urology-Below-Section.jpg"
                   : "/69a98d6fd3c8a8ecf82bcdd1_Service_20process_20Card-p-2000.png.png"
           }
       />
       <section className="cs-stat-overlay">
            <div className="cs-stat-number-wrap">
                <h1 className="cs-stat-number">{data.statNumber}</h1>
            </div>
            <div className="cs-stat-divider-wrap">
                <div className="cs-stat-divider" />
            </div>
            <div className="cs-stat-text">
                <h2 className="cs-stat-title">{data.statTitle}</h2>
                <div className="cs-stat-desc-wrap">
                    <div className="cs-stat-desc-inner">
                        <div className="cs-stat-desc">
                            {data.statDesc}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
);

// ContactInfo (was Container4)
const ContactInfo: FunctionComponent<{ data: SpecialtyData }> = ({ data }) => (
    <section className="cs-contact-info">
        <div className="cs-contact-info-badge">
            <button className="cs-contact-info-badge-btn">
                <img
                    className="cs-contact-info-badge-icon"
                    loading="lazy"
                    alt=""
                    src="/SVG.svg"
                />
            </button>
            <div className="cs-contact-info-badge-text-col">
                <div className="cs-contact-info-badge-text">SPECIALITY CARE</div>
            </div>
        </div>
        <div className="cs-contact-info-title-wrap">
            <h1 className="cs-contact-info-title">
                Any Queries?
                <br />
                Let Us Know.
            </h1>
        </div>
        <div className="cs-contact-info-desc-wrap">
            <div className="cs-contact-info-desc">
                {data.contactDesc}
            </div>
        </div>
    </section>
);

// ContactForm (was FormName)
const ContactForm: FunctionComponent = () => (
    <div className="cs-form">
        <div className="cs-form-row">
            <InputField label="Full Name" placeholder="Enter your legal name" />
            <InputField
                label="Email"
                placeholder="Enter Your email"
                minWidth="226px"
                filter="unset"
                labelColor="unset"
                inputMinWidth="193px"
            />
        </div>
        <div className="cs-form-row-single">
            <InputField
                label="Phone Number"
                placeholder="Enter your phone number"
                minWidth="unset"
                filter="blur(0px)"
                labelColor="#1f2a44"
                inputMinWidth="250px"
            />
        </div>
        <div className="cs-form-textarea-wrap">
            <div className="cs-form-textarea-inner">
                <div className="cs-form-textarea-label-wrap">
                    <div className="cs-form-textarea-label">
                        <div className="cs-form-textarea-label-text">Write Message</div>
                    </div>
                </div>
                <textarea
                    className="cs-form-textarea-el"
                    placeholder="Your message"
                    style={{
                        resize: "none",
                        fontFamily: "var(--font-inter)",
                        fontSize: "var(--fs-16)",
                        border: "var(--border-1)",
                        outline: "none"
                    }}
                />
                <div className="cs-form-note-wrap">
                    <div className="cs-form-note">
                        Request only. Our team will call you soon to confirm your slot.
                    </div>
                </div>
            </div>
        </div>
        <div className="cs-form-submit-row">
            <button className="cs-form-submit-btn">
                <div className="cs-form-submit-text">SUBMIT NOW</div>
            </button>
        </div>
    </div>
);

// Main exported component
const CardiologySection: FunctionComponent = () => {
    useInjectStyles();
    const { specialtyId } = useParams<{ specialtyId?: string }>();
    const data = getSpecialtyData(specialtyId || "cardiology");

    return (
        <div className="cs-page">
            <HeroSection data={data} specialtyId={specialtyId || "cardiology"} />
            <main className="cs-main-section">
                <TreatmentSection data={data} specialtyId={specialtyId || "cardiology"} />
                <div className="cs-marquee-wrap">
                    <div className="cs-marquee-row">
                        <div className="cs-marquee-item">
                            <img
                                className="cs-marquee-img"
                                alt=""
                                src="/Team-Section-Marquee-Image@2x.png"
                            />
                            <div className="cs-marquee-rect" />
                        </div>
                        <div className="cs-marquee-item">
                            <img
                                className="cs-marquee-img"
                                alt=""
                                src="/Team-Section-Marquee-Image1@2x.png"
                            />
                            <div className="cs-marquee-label-wrap">
                                <div className="cs-marquee-label">Comfort-First Setup</div>
                            </div>
                        </div>
                        <div className="cs-marquee-item2">
                            <div className="cs-marquee-img3-wrap">
                                <img
                                    className="cs-marquee-img3"
                                    alt=""
                                    src="/699adf4ed3772f3ec5628d53-Team-20Member-20Marquee-20-20img-2003-svg@2x.png"
                                />
                            </div>
                            <div className="cs-marquee-label-wrap">
                                <div className="cs-marquee-label">100% Hygiene Protocols</div>
                            </div>
                        </div>
                        <div className="cs-marquee-item2">
                            <img
                                className="cs-marquee-img4"
                                alt=""
                                src="/Team-Section-Marquee-Image2@2x.png"
                            />
                            <div className="cs-marquee-label-wrap">
                                <div className="cs-marquee-label">High-Precision Testing</div>
                            </div>
                        </div>
                        <div className="cs-marquee-item">
                            <img
                                className="cs-marquee-img"
                                alt=""
                                src="/Team-Section-Marquee-Image@2x.png"
                            />
                            <div className="cs-marquee-label-wrap">
                                <div className="cs-marquee-label">Comfort-First Setup</div>
                            </div>
                        </div>
                    </div>
                    <div className="cs-marquee-row2">
                        <div className="cs-marquee-item">
                            <img
                                className="cs-marquee-img"
                                alt=""
                                src="/Team-Section-Marquee-Image@2x.png"
                            />
                            <div className="cs-marquee-label-wrap">
                                <div className="cs-marquee-label">Advanced Diagnostics</div>
                            </div>
                        </div>
                        <div className="cs-marquee-item">
                            <img
                                className="cs-marquee-img"
                                alt=""
                                src="/Team-Section-Marquee-Image1@2x.png"
                            />
                            <div className="cs-marquee-rect2" />
                        </div>
                        <div className="cs-marquee-item2">
                            <div className="cs-marquee-img-blank" />
                            <div className="cs-marquee-rect3" />
                        </div>
                        <div className="cs-marquee-item2">
                            <img
                                className="cs-marquee-img4"
                                alt=""
                                src="/Team-Section-Marquee-Image2@2x.png"
                            />
                            <div className="cs-marquee-rect3" />
                        </div>
                        <div className="cs-marquee-item">
                            <img
                                className="cs-marquee-img"
                                alt=""
                                src="/Team-Section-Marquee-Image@2x.png"
                            />
                            <div className="cs-marquee-rect2" />
                        </div>
                    </div>
                    <div className="cs-marquee-row3">
                        <div className="cs-marquee-item">
                            <img
                                className="cs-marquee-img"
                                alt=""
                                src="/Team-Section-Marquee-Image@2x.png"
                            />
                            <div className="cs-marquee-rect" />
                        </div>
                        <div className="cs-marquee-item">
                            <img
                                className="cs-marquee-img"
                                alt=""
                                src="/Team-Section-Marquee-Image1@2x.png"
                            />
                            <div className="cs-marquee-rect2" />
                        </div>
                        <div className="cs-marquee-item2">
                            <div className="cs-marquee-img-blank" />
                            <div className="cs-marquee-rect3" />
                        </div>
                        <div className="cs-marquee-item2">
                            <img
                                className="cs-marquee-img4"
                                alt=""
                                src="/Team-Section-Marquee-Image2@2x.png"
                            />
                            <div className="cs-marquee-rect3" />
                        </div>
                        <div className="cs-marquee-item">
                            <img
                                className="cs-marquee-img"
                                alt=""
                                src="/Team-Section-Marquee-Image@2x.png"
                            />
                            <div className="cs-marquee-rect2" />
                        </div>
                    </div>
                </div>
                <StatCard data={data} specialtyId={specialtyId || "cardiology"} />
            </main>
            <div className="cs-contact-section">
                <ContactInfo data={data} />
                <section className="cs-form-wrap">
                    <ContactForm />
                </section>
            </div>
        </div>
    );
};

export default CardiologySection;
