import React, { useState } from "react";
import styles from "../styles/Home.module.scss";

const TableDataRow=({Name,Class,Subject,Score,Position})=><tr>
<td data-cell="Name">{Name}</td>
<td data-cell="Class">{Class}</td>
<td data-cell="Subject">{Subject}</td>
<td data-cell="Score">{Score}</td>
<td data-cell="position">{Position}</td>
</tr>
function Home() {
  return (
    <>
      <main className={styles.main}>
        <table>
          <caption>English-Test 26 May 2023 Result</caption>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Score</th>
            <th>Position</th>
          </tr>
<TableDataRow
Name={"Faisal Ahmed"}
Class={"Fsc"}
Subject={"English"}
Position={"1st"}
Score={80}
/>
<TableDataRow
Name={"Shehzad Ahmed"}
Class={"Fsc"}
Subject={"English"}
Position={"1st"}
Score={80}
/>
<TableDataRow
Name={"Sameer Ali"}
Class={"Fsc"}
Subject={"English"}
Position={"1st"}
Score={80}
/>
<TableDataRow
Name={"Fida Hussain"}
Class={"Fsc"}
Subject={"English"}
Position={"1st"}
Score={80}
/>
<TableDataRow
Name={"Aamir Mashori"}
Class={"Fsc"}
Subject={"English"}
Position={"1st"}
Score={80}
/>
         
        </table>
      </main>
    </>
  );
}

export default Home;
