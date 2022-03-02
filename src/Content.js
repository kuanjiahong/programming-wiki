function Content() {
    return (
        <div className="container mx-auto px-5 sm:px-20 md:px-20 min-h-screen">
            <DataType />
            <Syntax />
        </div>
    )
}

function DataType() {
    return (
        <>
        <h1 id="data-types" className="text-center p-2">Data Types</h1>
        <div className="p-2">
            <code>Strings</code>
            <p>Common Abbreviation: <code>str</code></p>
            <p><code>Strings</code> are a series of character that is wrapped in double quotation marks <code>" "</code></p>
            <p>Example: "Hello world", "Jason Kuan", "123"</p>
        </div>
        <div className="p-2">
            <code>Characters</code>
            <p>Common Abbreviation: <code>char</code></p>
            <p><code>Characters</code> are individual letters that is wrapped in single quotation marks <code>' '</code>.</p>
            <p>Example: 'J', 'a', '1', '@'</p>
        </div>
        <div className="p-2">
            <code>Integers</code>
            <p>Common Abbreviation: <code>int</code></p>
            <p>Positive or negative number that do not have decimal points</p>
            <p>Example: 1, 2, -1, -2</p>
        </div>
        <div className="p-2">
            <code>Float</code>
            <p>Common Abbreviation: <code>float</code></p>
            <p>Positive or negative number that have decimal points</p>
            <p>Example: 1.0, 2.1, 3.33, -4.6</p>
        </div>
        <div className="p-2">
            <code>Boolean</code>
            <p>Common Abbreviation: <code>bool</code></p>
            <p>True or False</p>
            <p>Example: True, False, true, false</p>
        </div>
        </>
    )
}

function Syntax() {
    return (
        <>
        <h1 id="syntax" className="text-center">Syntax</h1>
        </>
    )
}

export default Content;