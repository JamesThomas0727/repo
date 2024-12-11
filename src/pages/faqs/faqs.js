import './faqs.css';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "./faqs.css";
export default function FAQsPage() {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/faqs')
            .then(response => setFaqs(response.data))
            .catch(error => {
                console.error('Error fetching data:', error);
                return (<div>
                    <strong>Error!</strong>
                </div>);
            });
    }, []);
    return (
        <div>
            <div className='faqs-subject'>
                <br></br>
                <h2>Frequently Asked Questions</h2>
            </div>
            <Accordion defaultActiveKey="0" flush>
                {faqs.map(faq => {
                    return (
                        <Accordion.Item eventKey={faq.question_id}>
                            <Accordion.Header>
                                {faq.question}
                            </Accordion.Header>
                            <Accordion.Body>
                                {faq.answer}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </div>
    );
}