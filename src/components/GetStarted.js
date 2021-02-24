import React from 'react';
import Skeleton from 'react-loading-skeleton';

const GetStarted = ({listDisplay, formDisplay, isLoading}) => {
    if(listDisplay == false && formDisplay == false){
        if(isLoading) {
            return (
                <div className="container col-12 text-center bg-light p-5">
                    <Skeleton circle={true} height={350} width={350}/>                    
                    <div className="d-flex justify-content-center mt-5">
                        <Skeleton width={180}/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Skeleton width={280}/>
                    </div>
                </div> 
            )
        }
        return(
            <div className="container col-12 text-center bg-light p-5">
                <svg className="svg" id="e3f9207d-45bb-4c5f-8073-de7ce7a37f24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="837.49963" height="606.99923" viewBox="0 0 837.49963 606.99923"><path d="M691.25018,146.50039h-501a9.01357,9.01357,0,0,0-9,9v296a9.01357,9.01357,0,0,0,9,9h501a9.01357,9.01357,0,0,0,9-9v-296A9.01357,9.01357,0,0,0,691.25018,146.50039Zm7,305a7.00778,7.00778,0,0,1-7,7h-501a7.00779,7.00779,0,0,1-7-7v-296a7.00778,7.00778,0,0,1,7-7h501a7.00778,7.00778,0,0,1,7,7Z" transform="translate(-181.25018 -146.50039)" fill="#3f3d56"/><rect x="1" y="34" width="517" height="2" fill="#3f3d56"/><circle cx="18" cy="17.5" r="5" fill="#ccc"/><circle cx="33" cy="17.5" r="5" fill="#ccc"/><circle cx="48" cy="17.5" r="5" fill="#ccc"/><path d="M561.75018,580.00039h-242a8.50958,8.50958,0,0,1-8.5-8.5v-271a8.50958,8.50958,0,0,1,8.5-8.5h242a8.5095,8.5095,0,0,1,8.5,8.5v271A8.50951,8.50951,0,0,1,561.75018,580.00039Z" transform="translate(-181.25018 -146.50039)" fill="#77a7e0"/><path d="M511.75018,431.00039h-142a12.5,12.5,0,0,1,0-25h142a12.5,12.5,0,0,1,0,25Z" transform="translate(-181.25018 -146.50039)" fill="#fff"/><path d="M511.75018,477.50039h-142a12.5,12.5,0,0,1,0-25h142a12.5,12.5,0,0,1,0,25Z" transform="translate(-181.25018 -146.50039)" fill="#fff"/><path d="M511.75018,524.50039h-142a12.5,12.5,0,1,1,0-25h142a12.5,12.5,0,0,1,0,25Z" transform="translate(-181.25018 -146.50039)" fill="#fff"/><path d="M468.25018,369.50039h-55a12.5,12.5,0,0,1,0-25h55a12.5,12.5,0,0,1,0,25Z" transform="translate(-181.25018 -146.50039)" fill="#fff"/><rect x="43" y="71" width="433" height="21" rx="10.49999" fill="#ccc"/><path d="M920.86746,622.52325a9.69085,9.69085,0,0,0,3.46541-14.45l22.582-124.97534-21.07284-.27771-15.6819,123.58442a9.74338,9.74338,0,0,0,10.70738,16.11866Z" transform="translate(-181.25018 -146.50039)" fill="#a0616a"/><polygon points="674.215 470.097 666.215 508.097 667.215 593.097 682.215 593.097 689.215 510.097 700.215 475.097 674.215 470.097" fill="#a0616a"/><polygon points="724.215 470.097 716.215 508.097 717.215 593.097 732.215 593.097 739.215 510.097 750.215 475.097 724.215 470.097" fill="#a0616a"/><path d="M843.21636,737.42459h23.64388a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H828.3295a0,0,0,0,1,0,0v0A14.88685,14.88685,0,0,1,843.21636,737.42459Z" transform="translate(-146.60221 -184.16848) rotate(2.59897)" fill="#2f2e41"/><path d="M893.21636,737.42459h23.64388a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H878.3295a0,0,0,0,1,0,0v0A14.88685,14.88685,0,0,1,893.21636,737.42459Z" transform="translate(-146.55078 -186.43573) rotate(2.59897)" fill="#2f2e41"/><circle cx="710.71476" cy="259.18017" r="24.56103" fill="#a0616a"/><path d="M946.24285,466.42958c-8.12685-12.75218-35.16614-44.52714-75.2779-18.3317,0,0,9.5,79.5-13.5,122.5,0,0,53,16,82,1,0,0-10-67,0-80a53.90371,53.90371,0,0,0,8.01289-13.72626A12.891,12.891,0,0,0,946.24285,466.42958Z" transform="translate(-181.25018 -146.50039)" fill="#ccc"/><path d="M936.465,465.59788l9.81358,4.089a3.7184,3.7184,0,0,1,2.285,3.27758l.9014,21.63343-22-2Z" transform="translate(-181.25018 -146.50039)" fill="#ccc"/><path d="M861.465,568.59788s-22,41-18,79l31,5,22-53-5,54,32,1s21-78,14-85Z" transform="translate(-181.25018 -146.50039)" fill="#2f2e41"/><path d="M855.86746,612.52325a9.69085,9.69085,0,0,0,3.46541-14.45l22.582-124.97534-21.07284-.27771-15.6819,123.58442a9.74338,9.74338,0,0,0,10.70738,16.11866Z" transform="translate(-181.25018 -146.50039)" fill="#a0616a"/><path d="M880.465,448.59788l-9-1s-8-2-11,9-3,33-3,33l28-1Z" transform="translate(-181.25018 -146.50039)" fill="#ccc"/><path d="M895.89936,417.505c.882-3.06179.62715-7.205-2.34125-8.36308-1.54665-.60341-3.27233-.12748-4.92388.04165a13.14141,13.14141,0,0,1-9.08062-2.49947c-3.0705-2.28258-4.96707-5.77162-6.768-9.14722l-2.724-5.10565a22.18019,22.18019,0,0,1-1.5455-3.327c-1.51566-4.50732.13007-9.72558,3.49911-13.08158a18.97565,18.97565,0,0,1,12.96279-5.08228,34.98373,34.98373,0,0,1,13.85112,2.96738,61.26067,61.26067,0,0,1,20.6533,13.875c3.832,3.9201,7.32031,9.02692,6.51966,14.45-.62323,4.22138-3.70027,7.60171-6.63486,10.69956l-10.6447,11.2369c-1.88515,1.99-3.89962,4.06118-6.53184,4.82631s-6.02319-.35883-6.741-3.00434C895.44965,425.99122,895.01733,420.56675,895.89936,417.505Z" transform="translate(-181.25018 -146.50039)" fill="#2f2e41"/><path d="M1018.74982,752.49961a1.00308,1.00308,0,0,1-1,1h-288a1,1,0,0,1,0-2h288A1.00308,1.00308,0,0,1,1018.74982,752.49961Z" transform="translate(-181.25018 -146.50039)" fill="#3f3d56"/></svg>
                <h3>Nothing to show</h3>
                <p>Click one of the buttons above to get started.</p>
            </div>   
        ) 
    } else {
        return(<></>)
    }
}

export default GetStarted;