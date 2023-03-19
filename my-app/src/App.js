import "./App.css";

function App() {
  return (
    <>
      <section>
        <ul className="grid">
          {" "}
          Grid
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </section>
      <section>
        <ul className="inlineGrid">
          {" "}
          Inline Grid
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
      </section>
      <section>
        <p>Columns Grid</p>
        <ul className="columnsGrid">
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
        </ul>
      </section>
      <section>
        <p>Rows Grid</p>
        <ul className="rowsGrid">
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
        </ul>
      </section>
      <section>
        <p>Sretch Grid</p>
        <ul className="stretch">
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
        </ul>
      </section>
    </>
  );
}

export default App;
