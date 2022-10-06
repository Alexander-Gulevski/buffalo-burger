import styled from "styled-components";

export const StyledRadioButton = styled.div`
  display: flex;
  padding: 10px 15px;
  border: 2px solid #9b491a;
  border-radius: 9px;
  box-shadow: 2px 4px 8px #f36f22;
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  input + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  input + label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #f36f22;
    border-radius: 50%;
    margin-right: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    margin-right: 1px;
    cursor: pointer;
  }
  input:checked + label::before {
    background-color: #f36f22;
    border: 2px solid #f36f22;
  }
  input:not(:disabled):not(:checked) + label:hover::before {
    border-color: #b3d7ff;
  }
  label {
    cursor: pointer;
  }
`;
