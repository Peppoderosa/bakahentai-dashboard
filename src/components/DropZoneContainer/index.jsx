import React from "react";
import DropZone from "../DropZone";
import Button from "../../components/MenuButton";
import DropZoneCount from "../DropZoneCount";
//css
import "./styles.scss";
//assets
import closeIcon from "../../assets/icons/close.svg";

function DropZoneContainer({ title, limit = 100, poptext }) {
  const [files, setFiles] = React.useState([]);
  const [selectedChip, setSelectedChip] = React.useState(-1);
  const [starred, setStarred] = React.useState(-1);
  const [showPopOver, setShowPopOver] = React.useState(false);

  const link = "RegisterEpisodes/" + title;

  React.useEffect(() => {
    setSelectedChip(files.length >= 1 ? files.length - 1 : -1);
    setShowPopOver(files.length === 1 ? true : false);
    setTimeout(() => {
      setShowPopOver(false);
    }, 10000);
  }, [files]);

  const divStyle =
    selectedChip !== -1
      ? {
          backgroundImage: "url(" + files[selectedChip] + ")",
        }
      : null;

  const fileInputRef = React.useRef();

  function handleClickInput() {
    fileInputRef.current.click();
  }

  function handleDelete() {
    const newFiles = Array.from(files);
    newFiles.splice(selectedChip, 1);
    setFiles(newFiles);
    setSelectedChip(-1);
  }

  function handleReplace() {
    if (fileInputRef.current.files.length) {
      if (fileInputRef.current.files[0].type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(fileInputRef.current.files[0]);
        reader.onload = function (e) {
          let newFiles = Array.from(files);
          newFiles[selectedChip] = reader.result;
          setFiles(newFiles);
        };
      } else {
        console.log("Erro: formato não suportado");
      }
    }
  }

  async function handleFile() {
    const filestemp = fileInputRef.current.files;
    const newFiles = Object.values(filestemp);

    let count = files.length;

    newFiles.map((file) => {
      if (file.type.includes("image") && count < limit) {
        count = count + 1;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          setFiles((prev) => prev.concat(reader.result));
        };
      } else {
        console.log("Erro: formato não suportado");
      }
      return null;
    });
  }
  function handleStarred() {
    setStarred(selectedChip);
  }

  function handleUnStarred() {
    setStarred(-1);
  }

  return (
    <section className="dragndrop-container">
      <input
        ref={fileInputRef}
        className="file-input"
        type="file"
        onChange={handleReplace}
      />
      <input
        multiple
        ref={fileInputRef}
        className="file-input"
        type="file"
        onChange={handleFile}
      />
      <article
        className="dragndrop-main-container"
        style={
          selectedChip === -1
            ? { border: "2px dotted grey" }
            : { border: "2px dotted #2f2e2e" }
        }
      >
        {selectedChip === -1 ? (
          <DropZone
            text="Clique ou arraste uma imagem"
            setFiles={setFiles}
            limit={limit}
            files={files}
          />
        ) : (
          <div style={divStyle} className="image-container" alt="">
            <div className="pop-over-warning">
              {showPopOver ? (
                <>
                  <img
                    src={closeIcon}
                    alt=""
                    onClick={() => setShowPopOver(false)}
                  />
                  <p>{poptext}</p>
                </>
              ) : null}
            </div>
            <div className="button-group">
              <button onClick={handleClickInput}>Substituir</button>
              {starred === selectedChip ? (
                <button onClick={handleUnStarred}>Desfavoritar</button>
              ) : (
                <button onClick={handleStarred}>Favoritar</button>
              )}
              <button onClick={handleDelete}>Excluir</button>
            </div>
          </div>
        )}
      </article>

      <article className="count-group">
        {files.map((data, i) => (
          <DropZoneCount
            key={i}
            index={i}
            className="chip"
            onClick={setSelectedChip}
            starred={starred}
          />
        ))}

        <span className="last-span" onClick={handleClickInput}>
          +
        </span>
      </article>
      <Button
        className="button-dragndrop"
        to={link}
        text="Cadastrar Episódios"
      />
    </section>
  );
}

export default DropZoneContainer;
