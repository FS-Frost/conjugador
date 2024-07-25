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

function conjugarIndicativoPrimeraPersonaSingularPresente(info: InfoPalabra): string {
    if (info.base.endsWith("c")) {
        // base: [surc]ir
        // surcir => sur + ce
        return info.base.substring(0, info.base.length - 1) + "ce";
    }

    // amar => salt + o
    // temer => tem + o
    // partir => part + o
    return info.base + "o";
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
    let base = info.base;
    if (info.base.endsWith("z")) {
        base = info.base.substring(0, base.length - 1) + "c";
    }

    switch (info.determinante) {
        case "a":
            // amar => am + é
            return base + "é";

        case "e":
        case "i":
            // temer => tem + í
            // partir => part + í
            return base + "í";

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
    if (base.endsWith("z")) {
        base = base.substring(0, base.length - 1) + "c";
    }

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

function conjugarImperativoPrimeraPersonaSingular(info: InfoPalabra): string {
    // amar => am + a
    // temer => tem + a
    // partir => part + a
    // return base + "a";

    if (info.base.endsWith("z")) {
        // base: [roz]ar
        // rozar => roz + a
        return info.base + "a";
    }

    if (info.base.endsWith("c")) {
        // base: [surc]ir
        // surcir => sur + za
        return info.base.substring(0, info.base.length - 1) + "za";
    }

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

export type Conjugacion = {
    nombre: string;
    valor: string;
};

export function conjugar(palabra: string): Conjugacion[] {
    const info = analizarPalabra(palabra);
    console.log(`Base: ${info.base}`);
    console.log(`Raíz: ${info.raiz}`);
    console.log(`Determinante: ${info.determinante}`);

    const conjugaciones: Conjugacion[] = [];

    conjugaciones.push({
        nombre: "Indicativo: Infinitivo",
        valor: palabra,
    });

    conjugaciones.push({
        nombre: "Indicativo: Gerundio",
        valor: conjugarGerundio(info),
    });

    conjugaciones.push({
        nombre: "Indicativo: Participio",
        valor: conjugarParticipio(info),
    });

    conjugaciones.push({
        nombre: "Indicativo: Primera persona singular: Presente",
        valor: conjugarIndicativoPrimeraPersonaSingularPresente(info),
    });

    conjugaciones.push({
        nombre: "Indicativo: Primera persona singular: Pretérito imperfecto",
        valor: conjugarIndicativoPrimeraPersonaSingularPreteritoImperfecto(info),
    });

    conjugaciones.push({
        nombre: "Indicativo: Primera persona singular: Pretérito perfecto simple",
        valor: conjugarIndicativoPrimeraPersonaSingularPreteritoPerfectoSimple(info),
    });

    conjugaciones.push({
        nombre: "Indicativo: Primera persona singular: Futuro simple",
        valor: conjugarIndicativoPrimeraPersonaSingularFuturoSimple(palabra),
    });

    conjugaciones.push({
        nombre: "Indicativo: Primera persona singular: Condicional simple",
        valor: conjugarIndicativoPrimeraPersonaSingularCondicionalSimple(palabra),
    });

    conjugaciones.push({
        nombre: "Subjuntivo: Primera persona singular: Presente",
        valor: conjugarSubjuntivoPrimeraPersonaSingularPresente(info.base),
    });

    conjugaciones.push({
        nombre: "Subjuntivo: Primera persona singular: Pretérito imperfecto",
        valor: conjugarSubjuntivoPrimeraPersonaSingularPreteritoImperfecto(info),
    });

    conjugaciones.push({
        nombre: "Subjuntivo: Primera persona singular: Futuro simple",
        valor: conjugarSubjuntivoPrimeraPersonaSingularFuturoSimple(palabra),
    });

    conjugaciones.push({
        nombre: "Imperativo: Primera persona singular",
        valor: conjugarImperativoPrimeraPersonaSingular(info),
    });

    return conjugaciones;
}
