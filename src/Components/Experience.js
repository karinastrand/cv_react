import './Experience.css';
import ExperienceTitle from "./ExperienceTitle.js"
import ExperienceText from "./ExperienceText.js";
function Experience()
{
    return(
        <div >

            <hr/>
            <h4>ARBETSLIVSERFARENHET</h4>
                
            <div className='experience'>
                <ExperienceTitle 
                id="1"
                title1="Nectar Systems"
                title2="Hässleholm"
                title3="Jan 2000 - Okt 2023"
                />
                <ExperienceText
                title4="Systemutvecklare"
                text="Jag har jobbat med att utveckla, underhålla och supportera ett
                dokumentationssystem som användes av socialförvaltningar i ett antal
                kommuner. Systemet är byggt med ett av företaget egenutvecklat verktyg
                med basic som bas."
                />
            </div>
            <hr/>
            <h4>UTBILDNING</h4>
            <div className='experience'>
                <ExperienceTitle 
                
                title1="Programmering påbyggnad"
                title2="Lexicon Malmö"
                title3="2024"
                />
                <ExperienceText 
                    title4="Innehåll"
                    text=".NET fullstack:*
                    C# *
                    C# databasmetodik i Visual Studio: Entity Framework,LINQ*                    Frontend: HTML CSS, JavaScript, JQUERY, React*
                    ASP.NET Webb* C MVC*
                    Azure\nSQL i Microsoft SQL server*
                    Testmetodik:* 
                    Test av mjukvara i olika cykler*
                    Test design teknik*
                    Agile och
                    Exploratory test*
                    AI*
                    Azure*
                    Phyton"
                />
                
            </div>
            <div className='experience'>
                <ExperienceTitle 
                title1=".NET Core Microservices - The Complete Guide"
                title2="Udemy"
                title3="2024"
                />
                <ExperienceText
                title4="Innehåll"
                text="https://www.dotnetmastery.com/Home/Details?courseId=19*
                Från kursöversikten:*
                
                Learn Microservices architecture with 
                .NET Core MVC(.NET 8) and Identity Server Integration with Azure Service Bus*
                *" />
              
            </div>  
              <div className='experience'>
                <ExperienceTitle 
                title1="Complete guide to ASP.NET Core MVC (.NET 8)"
                title2="Udemy"
                title3="2024"
                />
                <ExperienceText
                title4="Innehåll"
                text="https://www.dotnetmastery.com/Home/Details?courseId=9*
                Från kursöversikten:*
                
                This is a Beginner to the Advance level course on ASP.NET Core that will take you from basics
                all the way to advance mode. This course is for anyone who is familiar with ASP.NET basics and wants to know how to architect and code real-world applications in ASP.NET Core*
                *
                En praktisk kurs i hur man bygger en E-commerce applikation med hjälp av MVC"
                />
               
            </div>  
            <div className='experience'>
                <ExperienceTitle 
                title1="RESTful API with ASP.NET Core - Create and Consume"
                title2="Udemy"
                title3="2024"
                />
                <ExperienceText
                title4="Innehåll"
                text="https://www.dotnetmastery.com/Home/Details?courseId=7*
                Från kursöversikten:*
                
                This is a Beginner to Intermediate level course on ASP.NET Core Web API that will take you from basics
                 the basics of building API to consuming them.*
                *"
                />
                
               
            </div>  
            <div className='experience'>
                <ExperienceTitle 
                title1="AppSettings and Secrets in ASP.NET Core"
                title2="Udemy"
                title3="2024"
                />
                <ExperienceText
                title4="Innehåll"
                text="https://www.dotnetmastery.com/Home/Details?courseId=16*
                Från kursöversikten:*
                
                Understand AppSettings and learn how to secure your application secrets
                 from development to production in ASP.NET Core*
                *"
                
                />
                
               
            </div>  
            <div className='experience'>
                <ExperienceTitle 
                title1="Programmering"
                title2="Malmö Högskola"
                title3="2007-2008"
                />
                <ExperienceText
                title4="Innehåll"
                text="VisualBasic.NET*
                grundkurs.NET*
                fortsättningskurs*
                C# grundkurs"
                />
               
            </div>
            <div className='experience'>
                <ExperienceTitle 
                title1="Programmering"
                title2="AMU Malmö"
                title3="1999-2000"
                />
                <ExperienceText
                title4="Innehåll"
                text="C++*
                C*
                Visual Basic"
                />
            </div>
            <hr/>
            <h4>CERTIFIERING</h4>
                
            <div className='experience'>
                <ExperienceTitle 
                id="1"
                title1="Azure-900"
                
                />
                
            </div>
            <hr/>
        </div>
        

    );

    }
export default Experience;
