diagToDrug = {"Antihypertensive drugs":["enalapril","metoprolol","losartan","amlodipine","hydrochlorothiazide"],
"Antidiabetic drugs":["metformin","pioglitazone","glibenclamide",]
};
drugToDose = {"enalapril":[5,10,20],"metoprolol":[50,100],"losartan":[50,100],"amlodipine":[5,10],"hydrochlorothiazide":[12.5,25,50]};

function clickDiag(){
  var diag = document.diagnosis.diseaseDiagnosed.value;
  console.log(diag)
  var drugs=diagToDrug[diag];
  for(i=0;i<5;i++)
  {
    for(j=0;j<4;j++)
    {
      var updateValue = "";

      if(i<drugs.length)
      {
        updateValue= drugs[i];
      }
      document.getElementById("med"+(i+1).toString()+(j).toString()).innerHTML = updateValue;
    }
  }
}

function updateDose(response,idCount){
  if (response=="") return; 
  var doses=drugToDose[response];
  for(i=0;i<Math.min(4,doses.length);i++)
  {
    document.getElementById("dose"+(i+1).toString()+idCount.toString()).innerHTML = doses[i];
  }

}
