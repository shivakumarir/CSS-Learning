function beforesubmit(event)
{
    let outputleaddate = document.querySelector(".outputleaddate");
    let inputleaddate = document.querySelector(".inputleaddate");
  //  console.log("output and inputlead date", outputleaddate,inputleaddate);

    outputleaddate.value=new Date(inputleaddate.value).toLocaleDateString("en_US");
   console.log('finaloutputdate', outputleaddate.value);

}