export type InfoPalabra = {
    /** [saltar] */
    palabra: string;

    /** [salt]ar */
    base: string;

    /** [salta]r */
    raiz: string;

    /** salt[a]r */
    determinante: string;
};

export function analizarPalabra(palabra: string): InfoPalabra {
    const info: InfoPalabra = {
        palabra: palabra,
        base: "",
        raiz: "",
        determinante: "",
    };

    const re = /^(?<base>\w+)(?<raiz>(?<determinante>a|e|i)r)$/;
    const groups = re.exec(palabra)?.groups;

    if (groups == null) {
        return info;
    }

    info.base = groups["base"];
    info.raiz = groups["raiz"];
    info.determinante = groups["determinante"];

    return info;
}

function conjugarGerundio(info: InfoPalabra): string {
    switch (info.determinante) {
        case "a":
            // amar => am + a + ndo
            return info.base + info.determinante + "ndo";

        case "e":
        case "i":
            // temer => tem + e->ie + ndo
            // partir => part + i->ie + ndo
            return info.base + "iendo";

        default:
            return "";
    }
}

function conjugarParticipio(info: InfoPalabra): string {
    switch (info.determinante) {
        case "a":
            // amar => am + ado
            return info.base + "ado";

        case "e":
        case "i":
            // temer => tem + ido
            // partir => part + ido
            return info.base + "ido";

        default:
            return "";
    }
}

function conjugarIndicativoPrimeraPersonaSingular(base: string): string {
    // amar => salt + o
    // temer => tem + o
    // partir => part + o
    return base + "o";
}

function conjugarIndicativoPrimeraPersonaSingularPreteritoImperfecto(info: InfoPalabra): string {
    switch (info.determinante) {
        case "a":
            // amar => am + aba
            return info.base + "aba";

        case "e":
        case "i":
            // temer => tem + ía
            // partir => part + ía
            return info.base + "ía";

        default:
            return "";
    }
}

function conjugarIndicativoPrimeraPersonaSingularPreteritoPerfectoSimple(info: InfoPalabra): string {
    switch (info.determinante) {
        case "a":
            // amar => am + é
            return info.base + "é";

        case "e":
        case "i":
            // temer => tem + í
            // partir => part + í
            return info.base + "í";

        default:
            return "";
    }
}

function conjugarIndicativoPrimeraPersonaSingularFuturoSimple(palabra: string): string {
    // amar => amar + é
    // temer => temer + é
    // partir => partir + é
    return palabra + "é";
}

function conjugarIndicativoPrimeraPersonaSingularCondicionalSimple(palabra: string): string {
    // amar => amar + ía
    // temer => temer + ía
    // partir => partir + ía
    return palabra + "ía";
}

function conjugarSubjuntivoPrimeraPersonaSingularPresente(base: string): string {
    // amar => am + e
    // temer => tem + e
    // partir => part + e
    return base + "e";
}

function conjugarSubjuntivoPrimeraPersonaSingularPreteritoImperfecto(info: InfoPalabra): string {
    switch (info.determinante) {
        case "a":
            // amar => am + ara
            return info.base + "ara";

        case "e":
        case "i":
            // temer => tem + iera
            // partir => part + iera
            return info.base + "iera";

        default:
            return "";
    }
}

function conjugarSubjuntivoPrimeraPersonaSingularFuturoSimple(palabra: string): string {
    // amar => amar + e
    // temer => temer + e
    // partir => partir + e
    return palabra + "e";
}

function conjugarImperativoPrimeraPersonaSingular(base: string): string {
    // amar => am + a
    // temer => tem + a
    // partir => part + a
    return base + "a";
}

export function conjugar(palabra: string): Record<string, string> {
    const info = analizarPalabra(palabra);
    console.log(`Base: ${info.base}`);
    console.log(`Raíz: ${info.raiz}`);
    console.log(`Determinante: ${info.determinante}`);

    const conjugaciones: Record<string, string> = {};

    conjugaciones["Indicativo: Infinitivo"] = palabra;

    conjugaciones["Indicativo: Gerundio"] = conjugarGerundio(info);

    conjugaciones["Indicativo: Participio"] = conjugarParticipio(info);

    conjugaciones["Indicativo: Primera persona singular: Presente"] =
        conjugarIndicativoPrimeraPersonaSingular(info.base);

    conjugaciones["Indicativo: Primera persona singular: Pretérito imperfecto"] =
        conjugarIndicativoPrimeraPersonaSingularPreteritoImperfecto(info);

    conjugaciones["Indicativo: Primera persona singular: Pretérito perfecto simple"] =
        conjugarIndicativoPrimeraPersonaSingularPreteritoPerfectoSimple(info);

    conjugaciones["Indicativo: Primera persona singular: Futuro simple"] =
        conjugarIndicativoPrimeraPersonaSingularFuturoSimple(palabra);

    conjugaciones["Indicativo: Primera persona singular: Condicional simple"] =
        conjugarIndicativoPrimeraPersonaSingularCondicionalSimple(palabra);

    conjugaciones["Subjuntivo: Primera persona singular: Presente"] =
        conjugarSubjuntivoPrimeraPersonaSingularPresente(info.base);

    conjugaciones["Subjuntivo: Primera persona singular: Pretérito imperfecto"] =
        conjugarSubjuntivoPrimeraPersonaSingularPreteritoImperfecto(info);

    conjugaciones["Subjuntivo: Primera persona singular: Futuro simple"] =
        conjugarSubjuntivoPrimeraPersonaSingularFuturoSimple(palabra);

    conjugaciones["Imperativo: Primera persona singular"] =
        conjugarImperativoPrimeraPersonaSingular(info.base);

    return conjugaciones;
}
