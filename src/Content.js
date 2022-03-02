function Content() {
    return (
        <div className="container mx-auto px-5 sm:px-20 md:px-20 min-h-screen">
            <DataType />
            <Syntax />
            <WebDev />
            <OOP />
            <BoilerPlate />
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
        <p className="p-2">C</p>
        <div className="p-2">
            <code>#include {`<stdio.h>`} </code>
            <br />
            <code>int main() {`{`}</code>
            <pre><code>  printf("Hello World!");</code></pre>
            <pre><code>  if (condition) {`{`}</code></pre>
            <pre><code>    {`//TODO`}</code></pre>
            <pre><code>  {`}`} else {`{`}</code></pre>
            <pre><code>    {`// TODO`}</code></pre>
            <pre><code>  {`}`}</code></pre>
            <pre><code>  return 0;</code></pre>
            <code>{`}`}</code>
        </div>
        <p className="p-2">C++</p>
        <div className="p-2">
            <code>#include {`<iostream>`}</code>
            <br />
            <code>using namespace std;</code>
            <br />
            <code>int main() {`{`}</code>
            <pre><code>  {`cout << "Hello World!" << endl;`}</code></pre>
            <pre><code>  if (condition) {`{`}</code></pre>
            <pre><code>    {`//TODO`}</code></pre>
            <pre><code>  {`}`} else {`{`}</code></pre>
            <pre><code>    {`// TODO`}</code></pre>
            <pre><code>  {`}`}</code></pre>
            <pre><code>  return 0;</code></pre>
            <code>{`}`}</code>
        </div>
        <p className="p-2">Java</p>
        <div className="p-2">
            <code>public class HelloWorld {`{`}</code>
            <pre><code>  public static void main (Strings[] args) {`{`}</code></pre>
            <pre><code>    System.out.println("Hello World");</code></pre>
            <pre><code>  {`}`}</code></pre>
            <code>{`}`}</code>
        </div>
        <p className="p-2">Python</p>
        <div className="p-2">
            <code>print("Hello World")</code>
            <br />
            <pre><code>if <i>condition</i>:</code></pre>
            <pre><code>  {`#TODO`}</code></pre>
            <code>else:</code>
            <pre><code>  {`#TODO`}</code></pre>
        </div>
        </>
    )
}

function WebDev() {
    return (
        <>
        <h1 id="web-development" className="text-center">Web development</h1>
        <ul>
            <li><a className="underline" href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">ReactJS</a></li>
            <li><a className="underline" href="https://vuejs.org/" target="_blank" rel="noreferrer">VueJS</a></li>
            <li><a className="underline" href="https://laravel.com/" target="_blank" rel="noreferrer">Laravel</a></li>
            <li><a className="underline" href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">Django</a></li>
            <li><a className="underline" href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank" rel="noreferrer">Flask</a></li>
            <li><a className="underline" href="https://nextjs.org/" target="_blank" rel="noreferrer">NextJS</a></li>
        </ul>
        </>

    )
}

function OOP() {
    return (
        <>
            <h1 id="oop" className="text-center">OOP</h1>
            <p className="p-2">The main concepts of Object-Oriented Programming(OOP): <b>A PIE</b></p>
            <div className="p-2">
                <p><b>A</b>bsraction</p>
                <p><b>P</b>olymorphism</p>
                <p><b>I</b>nheritance</p>
                <p><b>E</b>ncapsulation</p>
            </div>
        </>
    )
}

function BoilerPlate() {
    return (
        <>
            <h1 id="boiler-plate" className="text-center">Boiler Plate Code</h1>
            <p className="p-2">HTML</p>
            <div className="p-2">
                <code>{`<!DOCTYPE html>`}</code>
                <br />
                <code>{`<html lang="en">`}</code>
                <br />
                <pre><code>{`  <head>`}</code></pre>
                <pre><code>{`    <meta charset="utf-8" />`}</code></pre>
                <pre><code>{`    <meta name="viewport" content="width=device-width, initial-scale=1" />`}</code></pre>
                <pre><code>{`    <title>A Title</title>`}</code></pre>
                <pre><code>{`  </head>`}</code></pre>
                <pre><code>{`  <body>`}</code></pre>
                <pre><code>{`  </body>`}</code></pre>
                <code>{`</html>`}</code>
            </div>
        </>
    )
}

export default Content;