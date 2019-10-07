import React from 'react'; 
function SummaryInfo(){
    return (
        <div class="section" id="about">
            <div class="container">
            <div class="card" data-aos="fade-up" data-aos-offset="10">
                <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="card-body">
                    <div class="h4 mt-0 title">About</div>
                    <p>Hello! I am Mai Nguyen. Web Developer.</p>
                    <p>I can build a web page without CSS, HTML, JS. Awsome! </p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="card-body">
                    <div class="h4 mt-0 title">Basic Information</div>
                    <div class="row">
                        <div class="col-sm-4"><strong class="text-uppercase">Age:</strong></div>
                        <div class="col-sm-8">18</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-4"><strong class="text-uppercase">Email:</strong></div>
                        <div class="col-sm-8">mai.nguyen@company.com</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-4"><strong class="text-uppercase">Phone:</strong></div>
                        <div class="col-sm-8">+1718-111-0011</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-4"><strong class="text-uppercase">Address:</strong></div>
                        <div class="col-sm-8">11 Mac Dinh Chi, Nguyen Thi Minh Khai, P.Ben Nghe, Q1</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-4"><strong class="text-uppercase">Language:</strong></div>
                        <div class="col-sm-8">Vietnamese</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default SummaryInfo;