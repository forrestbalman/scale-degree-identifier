<script>
    import abcjs from "abcjs";
    import Cookies from "js-cookie";
    import { Howl, Howler } from "howler";
    import { onMount } from "svelte";

    /**
     * Scale data
     * Contains the key, scale, and abc notation for each scale
     * in the scale section, "s" represents "#"
     * "b"s are converted to "#"s in the scale section to reduce sound files
     **/
    const majorScales = [
        {
            key: "C",
            scale: ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4"],
            abc: "CDEFGABc",
        },
        {
            key: "G",
            scale: ["G3", "A3", "B3", "C4", "D4", "E4", "Fs4", "G4"],
            abc: "GABcdefg",
        },
        {
            key: "D",
            scale: ["D3", "E3", "Fs3", "G3", "A3", "B3", "Cs3", "D4"],
            abc: "DEFGABcd",
        },
        {
            key: "A",
            scale: ["A3", "B3", "Cs4", "D4", "E4", "Fs4", "Gs4", "A4"],
            abc: "ABcdefga",
        },
        {
            key: "E",
            scale: ["E3", "Fs3", "Gs3", "A3", "B3", "Cs4", "Ds4", "E4"],
            abc: "EFGABcde",
        },
        {
            key: "B",
            scale: ["B3", "Cs4", "Ds4", "E4", "Fs4", "Gs4", "As4", "B4"],
            abc: "Bcdefgab",
        },
        {
            key: "Cb",
            scale: ["B2", "Cs3", "Ds3", "F3", "Fs3", "Gs3", "As3", "B3"],
            abc: "CDEFGABc",
        },
        {
            key: "F#",
            scale: ["Fs3", "Gs3", "As3", "B3", "Cs4", "Ds4", "F4", "Fs4"],
            abc: "FGABcdef",
        },
        {
            key: "Gb",
            scale: ["Fs3", "Gs3", "As3", "B3", "Cs4", "Ds4", "F4", "Fs4"],
            abc: "GABcdefg",
        },
        {
            key: "C#",
            scale: ["Cs3", "Ds3", "F3", "Fs3", "Gs3", "As3", "C4", "Cs4"],
            abc: "CDEFGABc",
        },
        {
            key: "Db",
            scale: ["Cs3", "Ds3", "F3", "Fs3", "Gs3", "As3", "C4", "Cs4"],
            abc: "DEFGABcd",
        },
        {
            key: "Ab",
            scale: ["Gs3", "As3", "C4", "Cs4", "Ds4", "F4", "G4", "Gs4"],
            abc: "ABcdefga",
        },
        {
            key: "Eb",
            scale: ["Ds3", "F3", "G3", "Gs3", "As3", "C4", "D4", "Ds4"],
            abc: "EFGABcde",
        },
        {
            key: "Bb",
            scale: ["As3", "C4", "D4", "Ds4", "F4", "G4", "A4", "As4"],
            abc: "Bcdefgab",
        },
        {
            key: "F",
            scale: ["F3", "G3", "A3", "As3", "C4", "D4", "E4", "F4"],
            abc: "FGABcdef",
        },
    ];
    const naturalMinorScales = [
        {
            key: "C",
            scale: ["C3", "D3", "Ds3", "F3", "G3", "Gs3", "As3", "C4"],
            abc: "CDEFGABc",
        },
        {
            key: "G",
            scale: ["G3", "A3", "As3", "C4", "D4", "Ds4", "F4", "G4"],
            abc: "GABcdefg",
        },
        {
            key: "D",
            scale: ["D3", "E3", "F3", "G3", "A3", "As3", "C4", "D4"],
            abc: "DEFGABcd",
        },
        {
            key: "A",
            scale: ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4"],
            abc: "ABcdefga",
        },
        {
            key: "E",
            scale: ["E3", "Fs3", "G3", "A3", "B3", "C4", "D4", "E4"],
            abc: "EFGABcde",
        },
        {
            key: "B",
            scale: ["B3", "Cs4", "D4", "E4", "Fs4", "G4", "A4", "B4"],
            abc: "Bcdefgab",
        },
        {
            key: "F#",
            scale: ["Fs3", "Gs3", "A3", "B3", "Cs4", "D4", "E4", "Fs4"],
            abc: "FGABcdef",
        },
        {
            key: "C#",
            scale: ["Cs3", "Ds3", "E3", "Fs3", "Gs3", "A3", "B3", "Cs4"],
            abc: "CDEFGABc",
        },
        {
            key: "G#",
            scale: ["Gs3", "As3", "B3", "Cs4", "Ds4", "E4", "Fs4", "Gs4"],
            abc: "GABcdefg",
        },
        {
            key: "Ab",
            scale: ["Gs3", "As3", "B3", "Cs4", "Ds4", "E4", "Fs4", "Gs4"],
            abc: "ABcdefga",
        },
        {
            key: "D#",
            scale: ["Ds3", "F3", "Fs3", "Gs3", "As3", "B3", "Cs4", "Ds4"],
            abc: "DEFGABcd",
        },
        {
            key: "Eb",
            scale: ["Ds3", "F3", "Fs3", "Gs3", "As3", "B3", "Cs4", "Ds4"],
            abc: "EFGABcde",
        },
        {
            key: "A#",
            scale: ["As3", "C4", "Cs4", "Ds4", "F4", "Fs4", "Gs4", "As4"],
            abc: "ABcdefga",
        },
        {
            key: "Bb",
            scale: ["As3", "C4", "Cs4", "Ds4", "F4", "Fs4", "Gs4", "As4"],
            abc: "Bcdefgab",
        },
        {
            key: "F",
            scale: ["F3", "G3", "Gs3", "As3", "C4", "Cs4", "Ds4", "F4"],
            abc: "FGABcdef",
        },
    ];
    const harmonicMinorScales = [
        {
            key: "C",
            scale: ["C3", "D3", "Ds3", "F3", "G3", "Gs3", "B3", "C4"],
            abc: "CDEFGA=Bc",
        },
        {
            key: "G",
            scale: ["G3", "A3", "As3", "C4", "D4", "Ds4", "Fs4", "G4"],
            abc: "GABcde^fg",
        },
        {
            key: "D",
            scale: ["D3", "E3", "F3", "G3", "A3", "As3", "Cs4", "D4"],
            abc: "DEFGAB^cd",
        },
        {
            key: "A",
            scale: ["A3", "B3", "C4", "D4", "E4", "F4", "Gs4", "A4"],
            abc: "ABcdef^ga",
        },
        {
            key: "E",
            scale: ["E3", "Fs3", "G3", "A3", "B3", "C4", "Ds4", "E4"],
            abc: "EFGABc^de",
        },
        {
            key: "B",
            scale: ["B3", "Cs4", "D4", "E4", "Fs4", "G4", "As4", "B4"],
            abc: "Bcdefg^ab",
        },
        {
            key: "F#",
            scale: ["Fs3", "Gs3", "A3", "B3", "Cs4", "D4", "F4", "Fs4"],
            abc: "FGABcd^ef",
        },
        {
            key: "C#",
            scale: ["Cs3", "Ds3", "E3", "Fs3", "Gs3", "A3", "C4", "Cs4"],
            abc: "CDEFGA^Bc",
        },
        {
            key: "G#",
            scale: ["Gs3", "As3", "B3", "Cs4", "Ds4", "E4", "G4", "Gs4"],
            abc: "GABcde^^fg",
        },
        {
            key: "Ab",
            scale: ["Gs3", "As3", "B3", "Cs4", "Ds4", "E4", "G4", "Gs4"],
            abc: "ABcdef=ga",
        },
        {
            key: "D#",
            scale: ["Ds3", "F3", "Fs3", "Gs3", "As3", "B3", "D4", "Ds4"],
            abc: "DEFGAB^^cd",
        },
        {
            key: "Eb",
            scale: ["Ds3", "F3", "Fs3", "Gs3", "As3", "B3", "D4", "Ds4"],
            abc: "EFGABc=de",
        },
        {
            key: "A#",
            scale: ["As3", "C4", "Cs4", "Ds4", "F4", "Fs4", "A4", "As4"],
            abc: "ABcdef^^ga",
        },
        {
            key: "Bb",
            scale: ["As3", "C4", "Cs4", "Ds4", "F4", "Fs4", "A4", "As4"],
            abc: "Bcdefg=ab",
        },
        {
            key: "F",
            scale: ["F3", "G3", "Gs3", "As3", "C4", "Cs4", "E4", "F4"],
            abc: "FGABcd=ef",
        },
    ];
    const melodicMinorScales = [
        {
            key: "C",
            scale: ["C3", "D3", "Ds3", "F3", "G3", "A3", "B3", "C4"],
            abc: "CDEFG=A=Bc",
        },
        {
            key: "G",
            scale: ["G3", "A3", "As3", "C4", "D4", "E4", "Fs4", "G4"],
            abc: "GABcd=e^fg",
        },
        {
            key: "D",
            scale: ["D3", "E3", "F3", "G3", "A3", "B3", "Cs4", "D4"],
            abc: "DEFGA=B^cd",
        },
        {
            key: "A",
            scale: ["A3", "B3", "C4", "D4", "E4", "Fs4", "Gs4", "A4"],
            abc: "ABcde^f^ga",
        },
        {
            key: "E",
            scale: ["E3", "Fs3", "G3", "A3", "B3", "Cs4", "Ds4", "E4"],
            abc: "EFGAB^c^de",
        },
        {
            key: "B",
            scale: ["B3", "Cs4", "D4", "E4", "Fs4", "Gs4", "As4", "B4"],
            abc: "Bcdef^g^ab",
        },
        {
            key: "F#",
            scale: ["Fs3", "Gs3", "A3", "B3", "Cs4", "Ds4", "F4", "Fs4"],
            abc: "FGABc^d^ef",
        },
        {
            key: "C#",
            scale: ["Cs3", "Ds3", "E3", "Fs3", "Gs3", "As3", "C4", "Cs4"],
            abc: "CDEFG^A^Bc",
        },
        {
            key: "G#",
            scale: ["Gs3", "As3", "B3", "Cs4", "Ds4", "F4", "G4", "Gs4"],
            abc: "GABcd^e^^fg",
        },
        {
            key: "Ab",
            scale: ["Gs3", "As3", "B3", "Cs4", "Ds4", "F4", "G4", "Gs4"],
            abc: "ABcde=f=ga",
        },
        {
            key: "D#",
            scale: ["Ds3", "F3", "Fs3", "Gs3", "As3", "C4", "D4", "Ds4"],
            abc: "DEFGA^B^^cd",
        },
        {
            key: "Eb",
            scale: ["Ds3", "F3", "Fs3", "Gs3", "As3", "C4", "D4", "Ds4"],
            abc: "EFGAB=c=de",
        },
        {
            key: "A#",
            scale: ["As3", "C4", "Cs4", "Ds4", "F4", "G4", "A4", "As4"],
            abc: "ABcde^^f^^ga",
        },
        {
            key: "Bb",
            scale: ["As3", "C4", "Cs4", "Ds4", "F4", "G4", "A4", "As4"],
            abc: "Bcdef=g=ab",
        },
        {
            key: "F",
            scale: ["F3", "G3", "Gs3", "As3", "C4", "D4", "E4", "F4"],
            abc: "FGABc=d=ef",
        },
    ];

    let scaleType = "major";
    let generationMethod; //remember to remove this
    let key = "C";
    let scale = locateScale();
    let randomScaleDegree = Math.floor(Math.random() * scale.scale.length);
    let correctScore = 0;
    let totalScore = 0;
    let sample = "sine";
    let playbackSpeed = 1000;
    let scaleCounter = 0;
    let abc = ["X:1", "L:1/1", "K:C", "CDEFGABc"];
    let temporarilyHideFromView = true;

    //makes sure the scale is updated when the scale type or key is changed
    function assignScaleAndDegree() {
        scale = locateScale();
        randomScaleDegree = Math.floor(Math.random() * scale.scale.length);
        if (generationMethod) updateAbc();
    }

    //grabs scale type and assigns it to scaleType
    function selectScaleType(event) {
        scaleType = event.target.value;
        key = "C";

        assignScaleAndDegree();
    }

    //grabs key and assigns it to key
    function selectKey(event) {
        key = event.target.value;

        assignScaleAndDegree();
    }

    //grabs sample and assigns it to sample
    function selectSample(event) {
        sample = event.target.value;
    }

    function assignGenerationMethod(method) {
        temporarilyHideFromView = false; //triggers the scale to be shown
        generationMethod = method;

        if (generationMethod === "random") {
            randomScale();
        }

        if (generationMethod !== Cookies.get("generationMethod")) {
            Cookies.set("generationMethod", generationMethod);
            resetScore();
        }
    }

    //generates a random scale for round robin purposes
    function randomScale() {
        temporarilyHideFromView = false;

        if (scaleType === "major") {
            key = majorScales[Math.floor(Math.random() * majorScales.length)].key;
        } else if (scaleType === "naturalMinor") {
            key = naturalMinorScales[Math.floor(Math.random() * naturalMinorScales.length)].key;
        } else if (scaleType === "harmonicMinor") {
            key = harmonicMinorScales[Math.floor(Math.random() * harmonicMinorScales.length)].key;
        } else if (scaleType === "melodicMinor") {
            key = melodicMinorScales[Math.floor(Math.random() * melodicMinorScales.length)].key;
        }

        assignScaleAndDegree();
    }

    //updates the abc notation based on the scale type and key
    function updateAbc() {
        if (scaleType === "major") {
            abc[2] = `K:${key}`;
            abc[3] = majorScales.find((scale) => scale.key === key).abc;
        } else if (scaleType === "naturalMinor") {
            abc[2] = `K:${key}m`;
            abc[3] = naturalMinorScales.find((scale) => scale.key === key).abc;
        } else if (scaleType === "harmonicMinor") {
            abc[2] = `K:${key}m`;
            abc[3] = harmonicMinorScales.find((scale) => scale.key === key).abc;
        } else if (scaleType === "melodicMinor") {
            abc[2] = `K:${key}m`;
            abc[3] = melodicMinorScales.find((scale) => scale.key === key).abc;
        }

        abcjs.renderAbc("paper", abc.join("\n"), { responsive: "resize" });
    }

    //returns the scale based on the scale type and key
    function locateScale() {
        if (scaleType === "major") {
            return majorScales.find((scale) => scale.key === key);
        } else if (scaleType === "naturalMinor") {
            return naturalMinorScales.find((scale) => scale.key === key);
        } else if (scaleType === "harmonicMinor") {
            return harmonicMinorScales.find((scale) => scale.key === key);
        } else if (scaleType === "melodicMinor") {
            return melodicMinorScales.find((scale) => scale.key === key);
        }
    }

    //generates scale playback
    function generateScaleSound() {
        let notes = [];

        for (const note of scale.scale) {
            notes.push(`${sample}/${note}.mp3`);
        }

        for (let i = 0; i < notes.length; i++) {
            if (i === 0) {
                scaleCounter++;

                let sound = new Howl({
                    src: [notes[i]],
                    volume: 0.5,
                });

                sound.play();
            } else if (i === notes.length - 1) {
                setTimeout(() => {
                    scaleCounter++;

                    let sound = new Howl({
                        src: [notes[i]],
                        volume: 0.5,
                    });

                    sound.play();

                    setTimeout(() => {
                        scaleCounter = 0;
                    }, playbackSpeed + 250);
                }, i * playbackSpeed);
            } else {
                setTimeout(() => {
                    scaleCounter++;

                    let sound = new Howl({
                        src: [notes[i]],
                        volume: 0.5,
                    });

                    sound.play();
                }, i * playbackSpeed);
            }
        }
    }

    //generates the scale degree playback
    function generateScaleDegreeSound() {
        scaleCounter++;

        let sound = new Howl({
            src: [`${sample}/${scale.scale[randomScaleDegree]}.mp3`],
            volume: 0.5,
        });

        sound.play();

        setTimeout(() => {
            scaleCounter = 0;
        }, playbackSpeed + 250);
    }

    //checks if the scale degree is correct
    function guessScaleDegree(scaleDegree) {
        return () => {
            if (scaleDegree === randomScaleDegree + 1) {
                correctScore++;
                totalScore++;

                new Howl({
                    src: [`/correct.mp3`],
                    volume: 0.5,
                }).play();

                setScoreCookies();

                randomScaleDegree = Math.floor(Math.random() * scale.scale.length);

                if (generationMethod === "random") {
                    temporarilyHideFromView = true;
                    setTimeout(() => {
                        randomScale();
                    }, 500);
                }
            } else {
                totalScore++;

                new Howl({
                    src: [`/wrong.mp3`],
                    volume: 0.5,
                }).play();

                setScoreCookies();
            }
        };
    }

    function setScoreCookies() {
        Cookies.set("correctScore", correctScore);
        Cookies.set("totalScore", totalScore);
        Cookies.set("generationMethod", generationMethod);
    }

    function resetScore() {
        correctScore = 0;
        totalScore = 0;

        setScoreCookies();
    }

    //loads a staff onto the webpage on load for rendering purposes
    onMount(() => {
        abcjs.renderAbc("paper", abc.join("\n"), { responsive: "resize" });

        const savedCorrectScore = Cookies.get("correctScore");
        const savedTotalScore = Cookies.get("totalScore");

        if (savedCorrectScore && savedTotalScore) {
            correctScore = parseInt(savedCorrectScore);
            totalScore = parseInt(savedTotalScore);
        }
    });
</script>

<svelte:head>
    <title>Scale Degree Identification</title>
</svelte:head>

<div class="wrapper min-vh-100 bg-warning">
    <div class="container">
        <!--Navigation-->
        <nav class="py-3">
            <div class="d-flex align-items-center justify-content-center gap-1">
                <img src="favicon.png" width="32" height="32" alt="Alexa Thanos logo"/>
                <a href="https://www.alexathanos.com/" class="fs-4 fw-light text-decoration-none text-dark">Alexa Thanos</a>
            </div>
        </nav>

        <!-- Title and description -->
        <div class="pt-5 text-center">
            <h1 class="display-1 mb-4">Scale Degree Identification</h1>
        </div>

        <!-- Scale, key, and playback options-->
        <div class="pt-5 text-center">
            <div class="row g-3 justify-content-center">
                <div class="col-12 col-lg-4">
                    <label for="scales" class="mb-2">What type of scale?</label>
                    <select id="scales" class="form-select" aria-label="select which scale type to work on" on:change={selectScaleType} disabled={scaleCounter > 0}>
                        <option value="major">Major</option>
                        <option value="naturalMinor">Natural Minor</option>
                        <option value="harmonicMinor">Harmonic Minor</option>
                        <option value="melodicMinor">Melodic Minor</option>
                    </select>
                </div>
                {#if generationMethod !== "random"}
                    <div class="col-12 col-lg-4">
                        {#if !generationMethod}
                            <div class="row">
                                <div class="col">
                                    <p class="mb-2">Pick randomly</p>
                                    <button
                                        class="btn btn-danger"
                                        on:click={() => {
                                            assignGenerationMethod("random");
                                        }}>Random</button
                                    >
                                </div>
                                <div class="col-auto d-flex justify-content-center align-items-center">
                                    <p>or</p>
                                </div>
                                <div class="col">
                                    <p class="mb-2">Choose a key</p>
                                    <button
                                        class="btn btn-primary"
                                        on:click={() => {
                                            assignGenerationMethod("choose");
                                        }}>Choose</button
                                    >
                                </div>
                            </div>
                        {:else if generationMethod === "choose"}
                            <label for="keys" class="mb-2">Pick a key</label>
                            <select id="keys" class="form-select" aria-label="select which scale type to work on" on:change={selectKey} disabled={scaleCounter > 0}>
                                {#if scaleType === "major"}
                                    {#each majorScales as scale}
                                        <option value={scale.key}>
                                            {#if scale.key.includes("s")}
                                                {scale.key.replace("s", "#")}
                                            {:else}
                                                {scale.key}
                                            {/if}
                                        </option>
                                    {/each}
                                {:else if scaleType === "naturalMinor"}
                                    {#each naturalMinorScales as scale}
                                        <option value={scale.key}>
                                            {#if scale.key.includes("s")}
                                                {scale.key.replace("s", "#")}
                                            {:else}
                                                {scale.key}
                                            {/if}
                                        </option>
                                    {/each}
                                {:else if scaleType === "harmonicMinor"}
                                    {#each harmonicMinorScales as scale}
                                        <option value={scale.key}>
                                            {#if scale.key.includes("s")}
                                                {scale.key.replace("s", "#")}
                                            {:else}
                                                {scale.key}
                                            {/if}
                                        </option>
                                    {/each}
                                {:else if scaleType === "melodicMinor"}
                                    {#each melodicMinorScales as scale}
                                        <option value={scale.key}>
                                            {#if scale.key.includes("s")}
                                                {scale.key.replace("s", "#")}
                                            {:else}
                                                {scale.key}
                                            {/if}
                                        </option>
                                    {/each}
                                {/if}
                            </select>
                        {/if}
                    </div>
                {/if}
                <div class="col-12 col-lg-4">
                    <label for="samples" class="mb-2">What instrument should playback?</label>
                    <select id="samples" class="form-select" aria-label="what would you like to hear played back?" on:change={selectSample} disabled={scaleCounter > 0}>
                        <option value="sine">Sine</option>
                        <option value="triangle">Triangle</option>
                        <option value="square">Square</option>
                        <option value="piano">Piano</option>
                        <option value="marimba">Marimba</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Notated scale -->
        <div id="notation" class="pt-5 text-center {temporarilyHideFromView ? 'opacity-0' : 'opacity-100'}">
            <div class="d-flex justify-content-center align-items-center gap-3 mb-3">
                <h2 class="display-3">
                    {#if scaleType === "major"}
                        {#if key.includes("s")}
                            {key.replace("s", "#")}
                        {:else}
                            {key}
                        {/if}
                        major
                    {:else}
                        {#if key.includes("s")}
                            {key.replace("s", "#")}
                        {:else}
                            {key}
                        {/if}
                        minor
                    {/if}
                </h2>
                <button class="btn btn-dark" on:click={generateScaleSound} disabled={scaleCounter > 0}>
                    <i class="bi bi-play-fill"></i>
                </button>
            </div>

            <div class="row">
                <div class="col-12 bg-white rounded-2">
                    <div id="paper"></div>
                </div>
            </div>
        </div>

        <!--Score and listen button-->
        <div class="pt-5 text-center {generationMethod ? '' : 'd-none'}">
            <div class="d-flex gap-3 justify-content-center align-items-center">
                <h3 class="display-3">Score</h3>
                <button class="btn btn-sm btn-danger" on:click={resetScore} disabled={scaleCounter > 0}>Reset</button>
            </div>
            <h5 class="display-5 mb-4">{correctScore}/{totalScore}</h5>
            <p class="mb-2 pt-3 pt-lg-0">Listen to scale degree</p>
            <button class="btn btn-dark w-auto" on:click={generateScaleDegreeSound} disabled={scaleCounter > 0}>
                <i class="bi bi-play-fill"></i>
            </button>
        </div>

        <!-- Scale degree guesses -->
        <div class="pt-5 text-center {generationMethod ? '' : 'd-none'}">
            <div class="row g-3 justify-content-center align-items-center">
                <div class="col-3 col-md-1">
                    <button class="btn button-gradient-1 border-0 fs-3 text-white" on:click={guessScaleDegree(1)} disabled={scaleCounter > 0}>1</button>
                </div>
                <div class="col-3 col-md-1">
                    <button class="btn button-gradient-2 border-0 fs-3 text-white" on:click={guessScaleDegree(2)} disabled={scaleCounter > 0}>2</button>
                </div>
                <div class="col-3 col-md-1">
                    <button class="btn button-gradient-3 border-0 fs-3 text-white" on:click={guessScaleDegree(3)} disabled={scaleCounter > 0}>3</button>
                </div>
                <div class="col-3 col-md-1">
                    <button class="btn button-gradient-4 border-0 fs-3 text-white" on:click={guessScaleDegree(4)} disabled={scaleCounter > 0}>4</button>
                </div>
                <div class="col-3 col-md-1">
                    <button class="btn button-gradient-5 border-0 fs-3 text-white" on:click={guessScaleDegree(5)} disabled={scaleCounter > 0}>5</button>
                </div>
                <div class="col-3 col-md-1">
                    <button class="btn button-gradient-6 border-0 fs-3 text-white" on:click={guessScaleDegree(6)} disabled={scaleCounter > 0}>6</button>
                </div>
                <div class="col-3 col-md-1">
                    <button class="btn button-gradient-7 border-0 fs-3 text-white" on:click={guessScaleDegree(7)} disabled={scaleCounter > 0}>7</button>
                </div>
                <div class="col-3 col-md-1">
                    <button class="btn button-gradient-7 border-0 fs-3 text-white" on:click={guessScaleDegree(8)} disabled={scaleCounter > 0}>8</button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    #notation {
        transition: opacity 0.25s ease-in-out;
    }

    .button-gradient-1 {
        background: #0f0f0f;
    }

    .button-gradient-2 {
        background: #161616;
    }

    .button-gradient-3 {
        background: #222222;
    }

    .button-gradient-4 {
        background: #242424;
    }

    .button-gradient-5 {
        background: #313131;
    }

    .button-gradient-6 {
        background: #3d3d3d;
    }

    .button-gradient-7 {
        background: #474747;
    }
</style>
