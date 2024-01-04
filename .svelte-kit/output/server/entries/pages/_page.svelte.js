import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import "abcjs";
import "js-cookie";
import "howler";
const css = {
  code: "#notation.svelte-xkxq9l{transition:opacity 0.25s ease-in-out}.button-gradient-1.svelte-xkxq9l{background:#0f0f0f}.button-gradient-2.svelte-xkxq9l{background:#161616}.button-gradient-3.svelte-xkxq9l{background:#222222}.button-gradient-4.svelte-xkxq9l{background:#242424}.button-gradient-5.svelte-xkxq9l{background:#313131}.button-gradient-6.svelte-xkxq9l{background:#3d3d3d}.button-gradient-7.svelte-xkxq9l{background:#474747}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const majorScales = [
    {
      key: "C",
      scale: ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4"],
      abc: "CDEFGABc"
    },
    {
      key: "G",
      scale: ["G3", "A3", "B3", "C4", "D4", "E4", "Fs4", "G4"],
      abc: "GABcdefg"
    },
    {
      key: "D",
      scale: ["D3", "E3", "Fs3", "G3", "A3", "B3", "Cs3", "D4"],
      abc: "DEFGABcd"
    },
    {
      key: "A",
      scale: ["A3", "B3", "Cs4", "D4", "E4", "Fs4", "Gs4", "A4"],
      abc: "ABcdefga"
    },
    {
      key: "E",
      scale: ["E3", "Fs3", "Gs3", "A3", "B3", "Cs4", "Ds4", "E4"],
      abc: "EFGABcde"
    },
    {
      key: "B",
      scale: ["B3", "Cs4", "Ds4", "E4", "Fs4", "Gs4", "As4", "B4"],
      abc: "Bcdefgab"
    },
    {
      key: "Cb",
      scale: ["B2", "Cs3", "Ds3", "F3", "Fs3", "Gs3", "As3", "B3"],
      abc: "CDEFGABc"
    },
    {
      key: "F#",
      scale: ["Fs3", "Gs3", "As3", "B3", "Cs4", "Ds4", "F4", "Fs4"],
      abc: "FGABcdef"
    },
    {
      key: "Gb",
      scale: ["Fs3", "Gs3", "As3", "B3", "Cs4", "Ds4", "F4", "Fs4"],
      abc: "GABcdefg"
    },
    {
      key: "C#",
      scale: ["Cs3", "Ds3", "F3", "Fs3", "Gs3", "As3", "C4", "Cs4"],
      abc: "CDEFGABc"
    },
    {
      key: "Db",
      scale: ["Cs3", "Ds3", "F3", "Fs3", "Gs3", "As3", "C4", "Cs4"],
      abc: "DEFGABcd"
    },
    {
      key: "Ab",
      scale: ["Gs3", "As3", "C4", "Cs4", "Ds4", "F4", "G4", "Gs4"],
      abc: "ABcdefga"
    },
    {
      key: "Eb",
      scale: ["Ds3", "F3", "G3", "Gs3", "As3", "C4", "D4", "Ds4"],
      abc: "EFGABcde"
    },
    {
      key: "Bb",
      scale: ["As3", "C4", "D4", "Ds4", "F4", "G4", "A4", "As4"],
      abc: "Bcdefgab"
    },
    {
      key: "F",
      scale: ["F3", "G3", "A3", "As3", "C4", "D4", "E4", "F4"],
      abc: "FGABcdef"
    }
  ];
  let key = "C";
  let scale = locateScale();
  Math.floor(Math.random() * scale.scale.length);
  let correctScore = 0;
  let totalScore = 0;
  function locateScale() {
    {
      return majorScales.find((scale2) => scale2.key === key);
    }
  }
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1r3ujl1_START -->${$$result.title = `<title>Scale Degree Identification</title>`, ""}<!-- HEAD_svelte-1r3ujl1_END -->`, ""} <div class="wrapper min-vh-100 bg-warning"><div class="container"> <nav class="py-3" data-svelte-h="svelte-12uuq57"><div class="d-flex align-items-center justify-content-center gap-1"><img src="favicon.png" width="32" height="32" alt="Alexa Thanos logo"> <a href="https://www.alexathanos.com/" class="fs-4 fw-light text-decoration-none text-dark">Alexa Thanos</a></div></nav>  <div class="pt-5 text-center" data-svelte-h="svelte-19s9umy"><h1 class="display-1 mb-4">Scale Degree Identification</h1></div>  <div class="pt-5 text-center"><div class="row g-3 justify-content-center"><div class="col-12 col-lg-4"><label for="scales" class="mb-2" data-svelte-h="svelte-1l2tb7s">What type of scale?</label> <select id="scales" class="form-select" aria-label="select which scale type to work on" ${""}><option value="major" data-svelte-h="svelte-1cdnlto">Major</option><option value="naturalMinor" data-svelte-h="svelte-701sie">Natural Minor</option><option value="harmonicMinor" data-svelte-h="svelte-axttd6">Harmonic Minor</option><option value="melodicMinor" data-svelte-h="svelte-hcfiqu">Melodic Minor</option></select></div> ${`<div class="col-12 col-lg-4">${`<div class="row"><div class="col"><p class="mb-2" data-svelte-h="svelte-szxa1g">Pick randomly</p> <button class="btn btn-danger" data-svelte-h="svelte-1yv8i49">Random</button></div> <div class="col-auto d-flex justify-content-center align-items-center" data-svelte-h="svelte-1n17g0d"><p>or</p></div> <div class="col"><p class="mb-2" data-svelte-h="svelte-1ba0k54">Choose a key</p> <button class="btn btn-primary" data-svelte-h="svelte-pvwsl6">Choose</button></div></div>`}</div>`} <div class="col-12 col-lg-4"><label for="samples" class="mb-2" data-svelte-h="svelte-14qjlpu">What instrument should playback?</label> <select id="samples" class="form-select" aria-label="what would you like to hear played back?" ${""}><option value="sine" data-svelte-h="svelte-1mpn6cq">Sine</option><option value="triangle" data-svelte-h="svelte-1f5nbzi">Triangle</option><option value="square" data-svelte-h="svelte-bkgndu">Square</option><option value="piano" data-svelte-h="svelte-1x1pu78">Piano</option><option value="marimba" data-svelte-h="svelte-aj3dow">Marimba</option></select></div></div></div>  <div id="notation" class="${"pt-5 text-center " + escape("opacity-0", true) + " svelte-xkxq9l"}"><div class="d-flex justify-content-center align-items-center gap-3 mb-3"><h2 class="display-3">${`${key.includes("s") ? `${escape(key.replace("s", "#"))}` : `${escape(key)}`}
                        major`}</h2> <button class="btn btn-dark" ${""}><i class="bi bi-play-fill"></i></button></div> <div class="row" data-svelte-h="svelte-w6hxvd"><div class="col-12 bg-white rounded-2"><div id="paper"></div></div></div></div>  <div class="${"pt-5 text-center " + escape("d-none", true)}"><div class="d-flex gap-3 justify-content-center align-items-center"><h3 class="display-3" data-svelte-h="svelte-1y5cffl">Score</h3> <button class="btn btn-sm btn-danger" ${""}>Reset</button></div> <h5 class="display-5 mb-4">${escape(correctScore)}/${escape(totalScore)}</h5> <p class="mb-2 pt-3 pt-lg-0" data-svelte-h="svelte-11zb2tm">Listen to scale degree</p> <button class="btn btn-dark w-auto" ${""}><i class="bi bi-play-fill"></i></button></div>  <div class="${"pt-5 text-center " + escape("d-none", true)}"><div class="row g-3 justify-content-center align-items-center"><div class="col-3 col-md-1"><button class="btn button-gradient-1 border-0 fs-3 text-white svelte-xkxq9l" ${""}>1</button></div> <div class="col-3 col-md-1"><button class="btn button-gradient-2 border-0 fs-3 text-white svelte-xkxq9l" ${""}>2</button></div> <div class="col-3 col-md-1"><button class="btn button-gradient-3 border-0 fs-3 text-white svelte-xkxq9l" ${""}>3</button></div> <div class="col-3 col-md-1"><button class="btn button-gradient-4 border-0 fs-3 text-white svelte-xkxq9l" ${""}>4</button></div> <div class="col-3 col-md-1"><button class="btn button-gradient-5 border-0 fs-3 text-white svelte-xkxq9l" ${""}>5</button></div> <div class="col-3 col-md-1"><button class="btn button-gradient-6 border-0 fs-3 text-white svelte-xkxq9l" ${""}>6</button></div> <div class="col-3 col-md-1"><button class="btn button-gradient-7 border-0 fs-3 text-white svelte-xkxq9l" ${""}>7</button></div> <div class="col-3 col-md-1"><button class="btn button-gradient-7 border-0 fs-3 text-white svelte-xkxq9l" ${""}>8</button></div></div></div></div> </div>`;
});
export {
  Page as default
};
