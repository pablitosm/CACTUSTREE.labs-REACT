import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const innerCursor = document.querySelector(".inner-cursor");
    const outerCursor = document.querySelector(".outer-cursor");
    const textElement = document.querySelector(".custom-text");

    const proyectoUno = document.getElementById("projects1");
    const proyectoDos = document.getElementById("projects2");
    const proyectoTres = document.getElementById("projects3");
    const cuartaImagen = document.getElementById("gallery");
    const quintaImagen = document.getElementById("art");

    let mouseX = 0, mouseY = 0;
    let outerCursorX = 0, outerCursorY = 0;
    let textCursorX = 0, textCursorY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      innerCursor.style.left = `${mouseX}px`;
      innerCursor.style.top = `${mouseY}px`;
    };

    const updateOuterCursor = () => {
      const deltaX = (mouseX - outerCursorX) * 0.2;
      const deltaY = (mouseY - outerCursorY) * 0.1;
      outerCursorX += deltaX;
      outerCursorY += deltaY;

      outerCursor.style.left = `${outerCursorX}px`;
      outerCursor.style.top = `${outerCursorY}px`;

      requestAnimationFrame(updateOuterCursor);
    };

    const updateTextElement = () => {
      const deltaX = (mouseX - textCursorX) * 0.05;
      const deltaY = (mouseY - textCursorY) * 0.05;
      textCursorX += deltaX;
      textCursorY += deltaY;

      textElement.style.left = `${textCursorX}px`;
      textElement.style.top = `${textCursorY - 15}px`;

      requestAnimationFrame(updateTextElement);
    };

    const showTextElement = (text) => {
      textElement.innerText = text;
      textElement.style.display = "block";
    };

    const hideTextElement = () => {
      textElement.style.display = "none";
    };

    const handleMouseOverLink = () => {
      outerCursor.style.display = "block";
    };

    const handleMouseOutLink = () => {
      outerCursor.style.display = "none";
    };

    document.querySelectorAll("a").forEach(link => {
      link.addEventListener("mouseover", handleMouseOverLink);
      link.addEventListener("mouseout", handleMouseOutLink);
    });

    document.addEventListener("mousemove", (e) => {
      moveCursor(e);

      if (isCursorOverElement(e, proyectoUno)) {
        showTextElement("INTRO");
      } else if (isCursorOverElement(e, proyectoDos)) {
        showTextElement("ZERO");
      } else if (isCursorOverElement(e, proyectoTres)) {
        showTextElement("TEBAY");
      } else if (isCursorOverElement(e, quintaImagen)) {
        showTextElement("STILLS");
      } else if (isCursorOverElement(e, cuartaImagen)) {
        showTextElement("GALLERY");
      } else {
        hideTextElement();
      }
    });

    const adjustCursorSize = () => {
      const zoomLevel = (document.body.clientWidth / window.innerWidth) * 100;
      const cursorSize = 46;

      innerCursor.style.width = `${cursorSize / zoomLevel}vw`;
      innerCursor.style.height = `${cursorSize / zoomLevel}vw`;
    };

    const isCursorOverElement = (event, element) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      );
    };

    window.addEventListener("resize", adjustCursorSize);
    adjustCursorSize();

    requestAnimationFrame(updateOuterCursor);
    requestAnimationFrame(updateTextElement);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a").forEach(link => {
        link.removeEventListener("mouseover", handleMouseOverLink);
        link.removeEventListener("mouseout", handleMouseOutLink);
      });
      window.removeEventListener("resize", adjustCursorSize);
    };
  }, []);

  return (
    <>
      <div className="inner-cursor"></div>
      <div className="outer-cursor"></div>
      <div className="custom-text"></div>
    </>
  );
};

export default CustomCursor;
