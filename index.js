let dvs;
NRF.findDevices(function(devices) {
  dvs = devices.map(it => {return {id: it.id, name: it.name};});
  console.log(dvs);
let i_dev = 0;
let stop = !devices.length;
while (true)
{
    if (!stop)
    {
        stop = true;
        console.log(stop);
        let id = devices[i_dev++].id;
        if (i_dev > devices.length)
            i_dev = 0;
        console.log('Device id', id);
        NRF.connect(id)
            .then((d) => { console.log('Con ', d); NRF.disconnect();  stop = false;})
            .catch(err => {  console.log('Err ', err); stop = false;});
            setTimeout(() => {
               NRF.disconnect(); stop = false; 
            }, 2000);
    }
}

}, 4000);

NRF.on('connect', (address) => {
    console.log('Event connect', address);
});

NRF.on('disconnect', (address) => {
    console.log('Event disconnect', address);
});
