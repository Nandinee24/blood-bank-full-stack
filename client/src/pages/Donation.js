import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import API from '../services/API';
import Layout from '../components/shared/Layout/Layout';
import moment from 'moment';

const Donation = () => {
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);

    const getDonations = async () => {
        try {
            const { data } = await API.post("/inventory/get-inventory-hospital", {
                filters: {
                    inventoryType: "in",
                    donar: user?._id,
                },
            });
            setData(data?.inventory);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDonations();
    }, [user]);

    const printCertificate = (record) => {
        const cssStyles = `
            /* Paste the provided CSS here */
            @import url('https://fonts.googleapis.com/css?family=Open+Sans|Pinyon+Script|Rochester');
    
            .cursive {
              font-family: 'Pinyon Script', cursive;
            }
            
            .sans {
              font-family: 'Open Sans', sans-serif;
            }
            
            .bold {
              font-weight: bold;
            }
            
            .block {
              display: block;
            }
            
            .underline {
              border-bottom: 1px solid #777;
              padding: 5px;
              margin-bottom: 15px;
            }
            
            .margin-0 {
              margin: 0;
            }
            
            .padding-0 {
              padding: 0;
            }
            
            .pm-empty-space {
              height: 40px;
              width: 100%;
            }
            
            body {
              padding: 20px 0;
              background: #ccc;
            }
            
            .pm-certificate-container {
              position: relative;
              width: 800px;
              height: 600px;
              background-color: #618597;
              padding: 30px;
              color: #333;
              font-family: 'Open Sans', sans-serif;
              box-shadow: 0 0 5px rgba(0, 0, 0, .5);
              /*background: -webkit-repeating-linear-gradient(
                45deg,
                #618597,
                #618597 1px,
                #b2cad6 1px,
                #b2cad6 2px
              );
              background: repeating-linear-gradient(
                90deg,
                #618597,
                #618597 1px,
                #b2cad6 1px,
                #b2cad6 2px
              );*/
             
              .outer-border {
                width: 794px;
                height: 594px;
                // background-color:#618597;
                position: absolute;
                left: 50%;
                margin-left: -397px;
                top: 50%;
                margin-top:-297px;
                border: 2px solid #fff;
              }
              
              .inner-border {
                width: 730px;
                height: 530px;
                position: absolute;
                left: 50%;
                margin-left: -365px;
                top: 50%;
                margin-top:-265px;
                border: 2px solid #fff;
              }
            
              .pm-certificate-border {
                display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
                position: relative;
                width: 720px;
                height: 520px;
                padding: 0;
                border: 1px solid #E1E5F0;
                background-color: rgba(255, 255, 255, 1);
                background-image: none;
                left: 50%;
                margin-left: -360px;
                top: 50%;
                margin-top: -260px;
            
                .pm-certificate-block {
                  width: 650px;
                  height: 200px;
                  position: relative;
                  left: 50%;
                  margin-left: -325px;
                  top: 70px;
                  margin-top: -50px;
                }
            
                .pm-certificate-header {
                  margin-bottom: 10px;
                  margin-top:-51px
                }
            
                .pm-certificate-title {
                  position: relative;
                  top: 40px;
            
                  h2 {
                    font-size: 34px !important;
                  }
                }
            
                .pm-certificate-body {
                  padding: 20px;
            
                  .pm-name-text {
                    font-size: 20px;
                  }
                }
            
                .pm-earned {
                  margin: 15px 0 20px;
                  .pm-earned-text {
                    font-size: 20px;
                  }
                  .pm-credits-text {
                    font-size: 15px;
                  }
                }
            
                .pm-course-title {
                  .pm-earned-text {
                    font-size: 20px;
                  }
                  .pm-credits-text {
                    font-size: 15px;
                  }
                }
            
                .pm-certified {
                  font-size: 12px;
            
                  .underline {
                    margin-bottom: 5px;
                  }
                }
            
                .pm-certificate-footer {
                  width: 650px;
                  height: 100px;
                  position: relative;
                  left: 50%;
                  margin-left: -325px;
                  bottom: -105px;
                  display:flex;
                  
    justify-content: space-around;
    align-content: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
                }
              }
            }
            
        `;

        const certificateContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Donation Certificate</title>
                <style>${cssStyles}</style>
            </head>
            <body>
    <div class="container pm-certificate-container">
      <div class="outer-border"></div>
      <div class="inner-border"></div>
      
      <div class="pm-certificate-border col-xs-12">
        <div class="row pm-certificate-header">
          <div class="pm-certificate-title cursive col-xs-12 text-center">
            <h2>Blood Donation Certification</h2>
          </div>
        </div>
    
        <div class="row pm-certificate-body">
          
          <div class="pm-certificate-block">
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
                <div class="pm-certificate-name underline margin-0 col-xs-8 text-center">
                  <span class="pm-name-text bold">${user.name}</span>
                </div>
                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
              </div>
            </div>          
    
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
                <div class="pm-earned col-xs-8 text-center">
                  <span class="pm-earned-text padding-0 block cursive">has donated</span>
                  <span class="pm-credits-text block bold sans">Type ${record.bloodGroup}</span>
                </div>
                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
                <div class="col-xs-12"></div>
              </div>
            </div>
            
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
                <div class="pm-course-title col-xs-8 text-center">
                  <span class="pm-earned-text block cursive">on</span>
                </div>
                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
              </div>
            </div>
    
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
                <div class="pm-course-title underline col-xs-8 text-center">
                  <span class="pm-credits-text block bold sans">${moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</span>
                </div>
                <span class="pm-credits-text block sans ">Thank you for your generous donation!</span>

                <div class="col-xs-2"><!-- LEAVE EMPTY --></div>
              </div>
            </div>
          </div>       
    
          <div class="col-xs-12">
    <div class="row">
        <div class="pm-certificate-footer">
            <div class="col-xs-6 pm-certified text-center">
                <span class="pm-credits-text block sans">Blood Bank Organization</span>
                <span class="pm-empty-space block underline"></span>
                <span class="bold block">Blood Bank Administrator</span>
            </div>
            <div class="col-xs-6 pm-certified text-center">
                <span class="pm-credits-text block sans">Date Recorded</span>
                <span class="pm-empty-space block underline"></span>
                <span class="bold block">${moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</span>
            </div>
        </div>
    </div>
</div>

              </div>
            </div>
          </div>
    
        </div>
    
      </div>
    </div>
    </body>
    
            </html>
        `;

        const certificateWindow = window.open("", "_blank");
        certificateWindow.document.open();
        certificateWindow.document.write(certificateContent);
        certificateWindow.document.close();

        // Trigger printing
        certificateWindow.print();
    };


    return (
        <Layout>
            <div className="container mt-4">
                <table className="table py-4">
                    <thead>
                        <tr>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Inventory Type</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Donor Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.bloodGroup}</td>
                                <td>{record.inventoryType}</td>
                                <td>{record.quantity}</td>
                                <td>{user?.name}</td>
                                <td>{record.email}</td>
                                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => printCertificate(record)}
                                    >
                                        Print Certificate
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default Donation;
